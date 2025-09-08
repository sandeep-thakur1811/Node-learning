// routes/api.js
const express = require("express");
const router = express.Router();

// Default API route (GET) - for browser testing
router.get("/", (req, res) => {
  res.send("🚀 API is working!");
});

// POST /api/submit route
router.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: "Data received successfully ✅",
    name,
    email,
  });
});

module.exports = router;

