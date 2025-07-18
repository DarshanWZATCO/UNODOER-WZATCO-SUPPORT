require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const chatbotRoute = require('./routes/chatbot');

app.use(cors());
app.use(express.json());

app.use('/api/chatbot', chatbotRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ UNODOER Support Bot Server is running on port ${PORT}`));
