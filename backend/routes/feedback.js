const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Example: Accepts and echoes feedback
  const feedback = req.body;
  // TODO: Save feedback logic
  res.json({ success: true, feedback });
});

module.exports = router;