const chatbox = document.getElementById('chatbox');
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');

form.onsubmit = async (e) => {
  e.preventDefault();
  const message = input.value;
  chatbox.innerHTML += `<div>User: ${message}</div>`;
  input.value = '';
  const res = await fetch('http://localhost:5000/api/chatbot', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ message })
  });
  const data = await res.json();
  chatbox.innerHTML += `<div>Bot: ${data.reply}</div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
};