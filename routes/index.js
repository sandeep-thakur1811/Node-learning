const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hello World! from Home route 🎉");
});

router.get('/about', (req, res) => {
  res.send("This is About Page");
});

module.exports = router;
