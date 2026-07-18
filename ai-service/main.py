from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from PIL import Image
import requests
import io
import os
import time
import numpy as np
import cloudinary
import cloudinary.utils
from sklearn.metrics.pairwise import cosine_similarity
from dotenv import load_dotenv

load_dotenv()

CLOUD_NAME = os.getenv("CLOUDINARY_CLOUD_NAME")
API_KEY    = os.getenv("CLOUDINARY_API_KEY")
API_SECRET = os.getenv("CLOUDINARY_API_SECRET")

cloudinary.config(
    cloud_name = CLOUD_NAME,
    api_key    = API_KEY,
    api_secret = API_SECRET,
)

print("Loading CLIP model (CPU only)...")
from transformers import CLIPProcessor, CLIPModel
import torch

clip_model     = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
clip_processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")
clip_model.eval()
print("Model loaded ✓")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5000", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Helpers ----------

def get_signed_url(public_id: str) -> str:
    expires_at = int(time.time()) + 600
    url = cloudinary.utils.private_download_url(
        public_id,
        "jpg",
        resource_type="image",
        expires_at=expires_at,
        attachment=False,
    )
    return url

def download_image(url: str) -> Image.Image:
    r = requests.get(url, timeout=15, headers={"User-Agent": "Mozilla/5.0"})
    r.raise_for_status()
    return Image.open(io.BytesIO(r.content)).convert("RGB")

def get_features(img: Image.Image) -> np.ndarray:
    inputs = clip_processor(images=img, return_tensors="pt")
    with torch.no_grad():
        features = clip_model.get_image_features(**inputs)
    vec = features[0].cpu().numpy()
    return vec / np.linalg.norm(vec)   # normalise

# ---------- Routes ----------

class MatchRequest(BaseModel):
    found_public_id: str
    lost_public_id:  str

@app.get("/")
def root():
    return {"status": "AI matching service running ✓"}

@app.post("/match")
def match_images(req: MatchRequest):
    try:
        found_img = download_image(get_signed_url(req.found_public_id))
        lost_img  = download_image(get_signed_url(req.lost_public_id))

        f1 = get_features(found_img).reshape(1, -1)
        f2 = get_features(lost_img).reshape(1, -1)

        score = float(round(cosine_similarity(f1, f2)[0][0], 4))

        if score >= 0.90:
            confidence, is_match = "HIGH", True
        elif score >= 0.75:
            confidence, is_match = "MEDIUM", True
        else:
            confidence, is_match = "LOW", False

        return {"similarity": score, "is_match": is_match, "confidence": confidence}

    except Exception as e:
        print(f"ERROR in /match: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/match-all")
def match_all(req: dict):
    try:
        found_img = download_image(get_signed_url(req["found_public_id"]))
        f1 = get_features(found_img).reshape(1, -1)

        best_match = None
        best_score = 0.0

        for item in req["lost_items"]:
            try:
                lost_img = download_image(get_signed_url(item["public_id"]))
                f2 = get_features(lost_img).reshape(1, -1)
                score = float(cosine_similarity(f1, f2)[0][0])

                if score > best_score:
                    best_score = score
                    best_match = {
                        "report_id":  item["id"],
                        "similarity": round(score, 4),
                        "is_match":   score >= 0.75,
                        "confidence": "HIGH" if score >= 0.90 else "MEDIUM" if score >= 0.75 else "LOW"
                    }
            except Exception as e:
                print(f"Skipping item {item.get('id')}: {e}")
                continue

        return {"best_match": best_match, "checked": len(req["lost_items"])}

    except Exception as e:
        print(f"ERROR in /match-all: {e}")
        raise HTTPException(status_code=500, detail=str(e))