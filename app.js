require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.use(express.static('public'));

// in routes/api.js or routes/index.js add
router.post('/submit', (req,res) => {
  const {name,email} = req.body;
  // temporary: return back
  res.send(`Received name=${name} email=${email}`);
});
