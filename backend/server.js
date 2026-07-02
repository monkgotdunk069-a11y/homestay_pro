const express = require("express");
const cors = require("cors");
require("dotenv").config();

const homestayRoutes = require("./routes/homestays");
const statsRoutes = require("./routes/stats");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Global Middleware ─────────────────────────────────────────────────────────
app.use(cors()); // Allow all origins — public API, no auth/cookies needed
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/homestays", homestayRoutes);
app.use("/api/stats", statsRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "StayNest API is running",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// ─── Error Handling (must be last) ────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  StayNest API running at http://localhost:${PORT}`);
  console.log(`    Endpoints:`);
  console.log(`      GET  /api/health`);
  console.log(`      GET  /api/homestays`);
  console.log(`      GET  /api/homestays/search?q=<term>`);
  console.log(`      GET  /api/homestays/:id`);
  console.log(`      POST /api/homestays`);
  console.log(`      PUT  /api/homestays/:id`);
  console.log(`      PATCH /api/homestays/:id`);
  console.log(`      DELETE /api/homestays/:id`);
  console.log(`      GET  /api/stats`);
});
