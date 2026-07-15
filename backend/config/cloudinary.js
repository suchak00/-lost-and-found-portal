const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Private storage — photos are never publicly accessible
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'lost-and-found',
    type: 'private',         // ← this is the key line
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };