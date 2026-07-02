const express = require("express");
const router = express.Router();
const db = require("../data/homestays");

// ─── GET /api/stats ───────────────────────────────────────────────────────────
// Returns aggregate statistics about the homestay listings.
router.get("/", (req, res) => {
  const stats = db.getStats();
  res.json({
    success: true,
    data: stats,
  });
});

module.exports = router;
