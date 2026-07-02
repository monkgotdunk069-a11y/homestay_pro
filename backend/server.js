const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const homestayRoutes = require("./routes/homestays");
const statsRoutes = require("./routes/stats");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Global Middleware ─────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── API Routes (must come before static files) ───────────────────────────────
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

// ─── Serve React Frontend ──────────────────────────────────────────────────────
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// React Router catch-all: serve index.html for any non-API route
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// ─── Error Handling ────────────────────────────────────────────────────────────
app.use(errorHandler);

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  StayNest running at http://localhost:${PORT}`);
  console.log(`    Frontend: http://localhost:${PORT}`);
  console.log(`    API:      http://localhost:${PORT}/api/homestays`);
});
