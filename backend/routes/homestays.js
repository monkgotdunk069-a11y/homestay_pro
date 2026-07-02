const express = require("express");
const router = express.Router();
const db = require("../data/homestays");

// ─── GET /api/homestays/search ────────────────────────────────────────────────
// MUST be defined before /:id to avoid route collision
// Query param: ?q=<search term>
router.get("/search", (req, res) => {
  const q = req.query.q || "";
  if (!q.trim()) {
    return res.status(400).json({
      success: false,
      error: { message: "Query parameter 'q' is required" },
    });
  }
  const results = db.search(q);
  res.json({
    success: true,
    count: results.length,
    query: q,
    data: results,
  });
});

// ─── GET /api/homestays ───────────────────────────────────────────────────────
// Returns all homestays. Supports optional ?city= filter.
router.get("/", (req, res) => {
  const { city } = req.query;
  const data = city ? db.filterByCity(city) : db.getAll();
  res.json({
    success: true,
    count: data.length,
    data,
  });
});

// ─── GET /api/homestays/:id ───────────────────────────────────────────────────
// Returns a single homestay by numeric ID.
router.get("/:id", (req, res, next) => {
  const homestay = db.getById(req.params.id);
  if (!homestay) {
    const err = new Error(`Homestay with id '${req.params.id}' not found`);
    err.statusCode = 404;
    return next(err);
  }
  res.json({ success: true, data: homestay });
});

// ─── POST /api/homestays ──────────────────────────────────────────────────────
// Creates a new homestay. Body: { name, city, state, price, ... }
router.post("/", (req, res, next) => {
  const { name, city, state, price } = req.body;
  if (!name || !city || !state || price === undefined) {
    const err = new Error(
      "Fields 'name', 'city', 'state', and 'price' are required"
    );
    err.statusCode = 400;
    return next(err);
  }
  if (typeof price !== "number" || price <= 0) {
    const err = new Error("'price' must be a positive number");
    err.statusCode = 400;
    return next(err);
  }
  const newHomestay = db.create(req.body);
  res.status(201).json({ success: true, data: newHomestay });
});

// ─── PUT /api/homestays/:id ───────────────────────────────────────────────────
// Full update — replaces entire document (except id and createdAt).
router.put("/:id", (req, res, next) => {
  const { name, city, state, price } = req.body;
  if (!name || !city || !state || price === undefined) {
    const err = new Error(
      "Full update requires 'name', 'city', 'state', and 'price'"
    );
    err.statusCode = 400;
    return next(err);
  }
  const updated = db.update(req.params.id, req.body);
  if (!updated) {
    const err = new Error(`Homestay with id '${req.params.id}' not found`);
    err.statusCode = 404;
    return next(err);
  }
  res.json({ success: true, data: updated });
});

// ─── PATCH /api/homestays/:id ─────────────────────────────────────────────────
// Partial update — merges provided fields into existing document.
router.patch("/:id", (req, res, next) => {
  if (!db.getById(req.params.id)) {
    const err = new Error(`Homestay with id '${req.params.id}' not found`);
    err.statusCode = 404;
    return next(err);
  }
  const updated = db.update(req.params.id, req.body);
  res.json({ success: true, data: updated });
});

// ─── DELETE /api/homestays/:id ────────────────────────────────────────────────
// Deletes a homestay. Returns 204 No Content on success.
router.delete("/:id", (req, res, next) => {
  const removed = db.remove(req.params.id);
  if (!removed) {
    const err = new Error(`Homestay with id '${req.params.id}' not found`);
    err.statusCode = 404;
    return next(err);
  }
  res.status(204).send();
});

module.exports = router;
