const router = require('express').Router();
const db = require('../config/db');
const isAuthenticated = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const { cloudinary } = require('../config/cloudinary');

// ---------- Helper: generate signed URL for a private Cloudinary photo ----------
async function getSignedPhotoUrl(public_id) {
  if (!public_id) return null;
  try {
    const resource = await cloudinary.api.resource(public_id, {
      resource_type: 'image',
      type: 'private',
    });
    return cloudinary.utils.private_download_url(public_id, resource.format, {
      resource_type: 'image',
      type: 'private',
    });
  } catch (err) {
    console.error(`Signed URL error for ${public_id}:`, err.message);
    return null;
  }
}

// ---------- Shared query builder ----------
async function fetchMatchesByStatus(statuses) {
  const placeholders = statuses.map(() => '?').join(',');
  const [rows] = await db.query(
    `
    SELECT
      m.id AS match_id,
      m.similarity_score,
      m.confidence,
      m.status,
      m.created_at,
      f.id AS found_report_id, f.item_name AS found_item_name,
      f.description AS found_description, f.location AS found_location,
      f.photo_public_id AS found_photo_public_id,
      fu.email AS finder_email,
      l.id AS lost_report_id, l.item_name AS lost_item_name,
      l.description AS lost_description, l.location AS lost_location,
      l.photo_public_id AS lost_photo_public_id,
      lu.email AS owner_email
    FROM matches m
    JOIN reports f ON f.id = m.found_report_id
    JOIN reports l ON l.id = m.lost_report_id
    JOIN users fu ON fu.id = f.user_id
    JOIN users lu ON lu.id = l.user_id
    WHERE m.status IN (${placeholders})
    ORDER BY m.created_at DESC
    `,
    statuses
  );

  // Attach signed photo URLs to each match
  const withPhotos = await Promise.all(
    rows.map(async (row) => ({
      ...row,
      found_photo_url: await getSignedPhotoUrl(row.found_photo_public_id),
      lost_photo_url: await getSignedPhotoUrl(row.lost_photo_public_id),
    }))
  );

  return withPhotos;
}

// ---------- GET /api/admin/matches ----------
// Pending matches only
router.get('/matches', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const rows = await fetchMatchesByStatus(['pending']);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ---------- GET /api/admin/matches/history ----------
// Approved + rejected matches
router.get('/matches/history', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const rows = await fetchMatchesByStatus(['approved', 'rejected']);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ---------- PATCH /api/admin/matches/:id/approve ----------
router.patch('/matches/:id/approve', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const [result] = await db.query(
      `UPDATE matches SET status = 'approved' WHERE id = ?`,
      [req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Match not found' });
    }
    res.json({ message: 'Match approved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ---------- PATCH /api/admin/matches/:id/reject ----------
router.patch('/matches/:id/reject', isAuthenticated, isAdmin, async (req, res) => {
  try {
    const [result] = await db.query(
      `UPDATE matches SET status = 'rejected' WHERE id = ?`,
      [req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Match not found' });
    }
    res.json({ message: 'Match rejected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;