const chatbox = document.getElementById('chatbox');
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');

form.onsubmit = async (e) => {
  e.preventDefault();
  const message = input.value;
  chatbox.innerHTML += `<div>User: ${message}</div>`;
  input.value = '';
  try {
    const res = await fetch('https://your-app-name.onrender.com/api/chatbot', { // <--- CHANGE THIS!
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    chatbox.innerHTML += `<div>Bot: ${data.reply}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  } catch (err) {
    chatbox.innerHTML += `<div><span style="color:red;">Bot not responding.</span></div>`;
  }
};
