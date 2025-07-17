const chatbox = document.getElementById('chatbox');
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = input.value.trim();
  if (!message) return;

  // Show user's message
  chatbox.innerHTML += `<div class="user"><strong>You:</strong> ${message}</div>`;
  input.value = '';
  chatbox.scrollTop = chatbox.scrollHeight;

  try {
    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    chatbox.innerHTML += `<div class="bot"><strong>Bot:</strong> ${data.reply}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  } catch (error) {
    chatbox.innerHTML += `<div style="color:red;"><strong>Bot:</strong> Error connecting to server.</div>`;
  }
});
