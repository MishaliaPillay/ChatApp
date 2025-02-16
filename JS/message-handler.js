function loadMeesages() {
  const messageContainer = document.getElementById("messages");
  messageContainer.innerHTML = "";

  const messages = getChatMessage();
  const currentUser = getCurrentUser();
  if (!currentUser) return;

  messages.forEach((messagetext) => {
    const messageClass =
      messagetext.sender === currentUser ? "sent" : "received";
    const messageHTMLElement = ` <section class="message ${messageClass}">
      <article class="bubble">
        <strong>${messagetext.sender}</strong>${messagetext.text}
        <span> (${messagetext.timestamp})</span>
      </article>
    </section>`;
    messageContainer.innerHTML += messageHTMLElement;
  });
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
function sendMessage() {
  const inputMessage = document.getElementById("message-input");
  if (inputMessage.value.trim() === "") return;

  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const timestamp = new Date().toLocaleTimeString();
  const newMessage = {
    sender: currentUser,
    text: inputMessage.value,
    timestamp: timestamp,
  };

  saveChatMessage(newMessage);
  inputMessage.value = "";
  loadMeesages();
}
