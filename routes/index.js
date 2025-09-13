const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

router.get('/', (req,res)=> res.send('🏠 Home Page'));
router.get('/about', (req,res)=> res.send('ℹ️ About Page'));

// Save to DB
router.post('/submit', async (req,res) => {
  try {
    const { name, email } = req.body;
    const newSub = new Submission({ name, email });
    await newSub.save();
    res.json({ message: "✅ Saved to DB", data: newSub });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

