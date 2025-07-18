const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
  const userMessage = req.body.message;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are UNODOER Support Bot for WZATCO' },
          { role: 'user', content: userMessage },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    res.json({ reply: '⚠️ Sorry, OpenAI request failed.' });
  }
});

module.exports = router;
