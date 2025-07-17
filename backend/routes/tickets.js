const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Example: Accepts and echoes the ticket payload
  const ticket = req.body;
  // TODO: Save ticket logic
  res.json({ success: true, ticket });
});

module.exports = router;