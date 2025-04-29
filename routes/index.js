const express = require('express');
const router = express.Router();

// Route utama
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

module.exports = router;