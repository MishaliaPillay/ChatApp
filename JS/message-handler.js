function loadMeesages() {
  const messageContainer = document.getElementById("messages");
  //clear the chat before loading new messages
  messageContainer.innerHTML = "";

  const messages = getChatMessage();
  const currentUser = getCurrentUser();
  //if there is not user stop this function
  if (!currentUser) return;

  messages.forEach((messagetext) => {
    //was the messagereceived or sent by the current user -apply appropriate styling
    const messageClass =
      messagetext.sender === currentUser ? "sent" : "received";
    const userClass =
      messagetext.sender === currentUser ? "sent-message" : "received-message";
    const messageHTMLElement = ` <p class="${userClass}">${messagetext.sender}</p><section class="message ${messageClass}">
      <article class="bubble">
        ${messagetext.text}
        <span class="message-time"> ${messagetext.timestamp}</span>
      </article>
    </section>`;
    messageContainer.innerHTML += messageHTMLElement;
  }); //scroll to the latest message
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
function sendMessage() {
  const inputMessage = document.getElementById("message-input");
  if (inputMessage.value.trim() === "") return;

  const currentUser = getCurrentUser();
  if (!currentUser) return;

  const timestamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const newMessage = {
    sender: currentUser,
    text: inputMessage.value,
    timestamp: timestamp,
  };

  saveChatMessage(newMessage);
  inputMessage.value = ""; //clear the input field after sending messages
  loadMeesages();
}
