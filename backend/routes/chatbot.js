const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "❌ No message provided." });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('❌ OpenAI Error:', error.message);
    res.status(500).json({ reply: "⚠️ OpenAI AI failed." });
  }
});

module.exports = router;
