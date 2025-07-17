const express = require('express');
const axios = require('axios');
const router = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

router.post('/', async (req, res) => {
  const { message } = req.body;

  try {
    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: message }]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = geminiRes.data?.candidates?.[0]?.content?.parts?.[0]?.text || "🤖 Gemini gave no reply.";
    res.json({ reply: `🤖 UNODOER Bot: ${reply}` });

  } catch (error) {
    console.error('Gemini Error:', error.message);
    res.json({ reply: '⚠️ Sorry, Gemini AI failed.' });
  }
});

module.exports = router;
