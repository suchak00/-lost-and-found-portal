const router = require('express').Router();
const db = require('../config/db');
const { upload, cloudinary } = require('../config/cloudinary');
const isAuthenticated = require('../middleware/auth');

// POST /api/reports/lost — report a lost item
router.post('/lost', isAuthenticated, upload.single('photo'), async (req, res) => {
  try {
    const { item_name, description, location } = req.body;
    const user_id = req.user.id;

    if (!item_name) return res.status(400).json({ error: 'Item name is required' });

    let photo_url = null;
    let photo_public_id = null;

    if (req.file) {
      photo_url = req.file.path;
      photo_public_id = req.file.filename;
    }

    const [result] = await db.query(
      `INSERT INTO reports 
        (user_id, type, item_name, description, location, photo_url, photo_public_id)
       VALUES (?, 'lost', ?, ?, ?, ?, ?)`,
      [user_id, item_name, description, location, photo_url, photo_public_id]
    );

    res.status(201).json({
      message: 'Lost item reported successfully',
      report_id: result.insertId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/reports/found — report a found item
router.post('/found', isAuthenticated, upload.single('photo'), async (req, res) => {
  try {
    const { item_name, description, location } = req.body;
    const user_id = req.user.id;

    if (!item_name) return res.status(400).json({ error: 'Item name is required' });

    let photo_url = null;
    let photo_public_id = null;

    if (req.file) {
      photo_url = req.file.path;
      photo_public_id = req.file.filename;
    }

    const [result] = await db.query(
      `INSERT INTO reports 
        (user_id, type, item_name, description, location, photo_url, photo_public_id)
       VALUES (?, 'found', ?, ?, ?, ?, ?)`,
      [user_id, item_name, description, location, photo_url, photo_public_id]
    );

    res.status(201).json({
      message: 'Found item reported successfully',
      report_id: result.insertId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/reports/mine — get current user's reports
router.get('/mine', isAuthenticated, async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT id, type, item_name, description, location, status, created_at
       FROM reports WHERE user_id = ? ORDER BY created_at DESC`,
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;