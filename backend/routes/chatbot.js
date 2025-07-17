const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: '❌ No message received' });
  }

  // Simple echo response logic
  const reply = `🤖 UNODOER Bot: You said "${message}"`;
  res.json({ reply });
});

module.exports = router;
