const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files from frontend/
app.use(express.static(path.join(__dirname, '../frontend')));

const chatbotRoutes = require('./routes/chatbot');
const ticketsRoutes = require('./routes/tickets');
const feedbackRoutes = require('./routes/feedback');

app.use('/api/chatbot', chatbotRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/feedback', feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
