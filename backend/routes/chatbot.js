const express = require('express');
const router = express.Router();
const axios = require('axios');

const OPENAI_API_KEY = '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'; // Replace with your key

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const gptResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = gptResponse.data.choices[0].message.content.trim();
    res.json({ reply: `🤖 UNODOER Bot: ${reply}` });

  } catch (error) {
    console.error('GPT Error:', error.message);
    res.json({ reply: '⚠️ Sorry, something went wrong with the AI.' });
  }
});

module.exports = router;
