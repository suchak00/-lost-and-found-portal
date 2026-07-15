const router = require('express').Router();

// Placeholder — full reports routes come in Phase 2
router.get('/', (req, res) => {
  res.json({ message: 'Reports route working' });
});

module.exports = router;