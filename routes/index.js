// routes/index.js
const express = require("express");
const router = express.Router();

// Default route
router.get("/", (req, res) => {
  res.send("🚀 Welcome to Node App Home Route");
});

// Health check route
router.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

module.exports = router;

