const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const chatbotRoutes = require('./routes/chatbot');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chatbot', chatbotRoutes);

// Root test route
app.get('/', (req, res) => {
  res.send('✅ UNODOER Support Bot Server is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
