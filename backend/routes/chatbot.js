const express = require('express');
const axios = require('axios');
const router = express.Router();

// Replace with your actual OpenAI API key
const OPENAI_API_KEY = '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'; // ← Add your real key here

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content.trim();
    res.json({ reply: `🤖 UNODOER Bot: ${reply}` });
  } catch (error) {
    console.error('Error with OpenAI API:', error.message);
    res.status(500).json({ reply: '⚠️ Sorry, something went wrong with the AI.' });
  }
});

module.exports = router;
