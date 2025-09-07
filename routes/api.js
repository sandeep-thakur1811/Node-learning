const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ status: "ok", message: "API is working 🚀" });
});

router.post('/echo', (req, res) => {
  res.json({ you_sent: req.body });
});

module.exports = router;
