# UNODOER Support System

A Node.js + Express + OpenAI powered chatbot and support ticket application.

## Project Structure

```
unodoer-support/
├── backend/
│   ├── routes/
│   │   ├── chatbot.js
│   │   ├── tickets.js
│   │   └── feedback.js
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── js/
│   │   └── app.js
│   └── css/
│       └── style.css
├── admin-panel/
│   └── index.html
├── .env.example
├── package.json
└── README.md
```

## Setup

1. Copy `.env.example` to `.env` and set your OpenAI API key.
2. Run `npm install` to install dependencies.
3. Start the server: `npm start`.
4. Open `frontend/index.html` in your browser.

## Next Steps

- Integrate OpenAI GPT logic in `backend/routes/chatbot.js`.
- Persist tickets and feedback using a database (optional).
- Expand frontend and admin panel as needed.

```