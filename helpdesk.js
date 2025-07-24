const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatWindow = document.getElementById('chat-window');

sendBtn.addEventListener('click', function() {
  const message = messageInput.value.trim();
  const adminCode = 'secretcode123'; // Change this as per your requirement

  if (message === adminCode) {
    db.ref('admin-chat').push({
      text: 'Admin code verified. You can chat now!',
      timestamp: Date.now()
    });
    messageInput.value = '';
    chatWindow.innerHTML = ''; // Clear the input box
  } else {
    chatWindow.innerHTML = '<p>Invalid Code</p>';
  }
});

// Display admin messages
db.ref('admin-chat').on('child_added', snapshot => {
  const message = snapshot.val();
  const div = document.createElement('div');
  div.classList.add('chat-message');
  div.innerHTML = message.text;
  chatWindow.appendChild(div);
});

