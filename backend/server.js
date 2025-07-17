const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const chatbotRoutes = require('./routes/chatbot');
const ticketsRoutes = require('./routes/tickets');
const feedbackRoutes = require('./routes/feedback');

app.use('/api/chatbot', chatbotRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/feedback', feedbackRoutes);

// Add this route for root
app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
