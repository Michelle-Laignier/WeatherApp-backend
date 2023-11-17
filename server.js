const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/key', (req, res) => {
  res.json({ apiKey: process.env.API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
