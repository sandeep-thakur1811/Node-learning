const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

// Home Page
router.get('/', (req,res)=> res.send('🏠 Home Page'));

// About Page
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

// List all submissions (EJS)
router.get('/submissions', async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });
    res.render('index', { submissions });
  } catch (err) {
    res.status(500).send("Error fetching submissions.");
  }
});

module.exports = router;

