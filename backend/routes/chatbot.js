const express = require('express');
const router = express.Router();

// For demonstration, actual GPT code should be added here
router.post('/', async (req, res) => {
  const { message } = req.body;
  // TODO: Integrate OpenAI GPT logic here
  res.json({ reply: `Echo: ${message}` });
});

module.exports = router;