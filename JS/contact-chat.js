document.addEventListener("DOMContentLoaded", () => {
  //get the username froom the url
  const urlUser = new URLSearchParams(window.location.search);
  const contactChat = urlUser.get("user");
  const currentUser = getCurrentUser();

  //i f no user is logged in page redirected
  if (!currentUser || !contactChat) {
    window.location.href = "contacts-page.html";
    return;
  }

  // updates the chat header to show who  user is messaging
  document.getElementById("contact-header").textContent = `${contactChat}`;
  loadMessages(currentUser, contactChat);
  //triggers send function
  document.getElementById("send-button").addEventListener("click", () => {
    sendMessage(currentUser, contactChat);
  });
  //triggers typing indicator
  document.getElementById("message-input").addEventListener("input", () => {
    sendTypingIndicator(currentUser, contactChat);
  });
  //listen  chnages in localstoarge and updatesthe chat
  window.addEventListener("storage", (event) => {
    if (
      event.key === `chat_${currentUser}_${contactChat}` ||
      event.key === `chat_${contactChat}_${currentUser}`
    ) {
      loadMessages(currentUser, contactChat); //updates typing inidicator
    } else if (event.key === `typing_${contactChat}`) {
      showTyping(contactChat);
    }
  });
});
//loads message history between the current user and their selected contact
function loadMessages(currentUser, contactChat) {
  const messageBox = document.getElementById("messages");
  messageBox.innerHTML = "";
  //gets the specifc messgess for these 2 users
  const messages =
    JSON.parse(localStorage.getItem(`chat_${currentUser}_${contactChat}`)) ||
    JSON.parse(localStorage.getItem(`chat_${contactChat}_${currentUser}`)) ||
    [];
  //loops  through the messages andthen shows them
  messages.forEach((messagetext) => {
    const messageClass =
      messagetext.sender === currentUser ? "sent" : "received";

    const messageHTMLElement = ` <p class="sent-message">${messagetext.sender}</p><section class="message ${messageClass}">
    <article class="bubble">
      ${messagetext.text}
      <span class="message-time"> ${messagetext.timeStamp}</span>
    </article>
  </section>`;
    messageBox.innerHTML += messageHTMLElement;
  });
  //scroll to latest message
  messageBox.scrollTop = messageBox.scrollHeight;
}

function sendMessage(currentUser, contactChat) {
  const inputMessage = document.getElementById("message-input");
  //so it doesn't sed empty messages
  if (inputMessage.value.trim() === "") return;

  const timeStamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const newMessage = {
    sender: currentUser,
    text: inputMessage.value,
    timeStamp: timeStamp,
  };
  //get the chat history
  let messages =
    JSON.parse(localStorage.getItem(`chat_${currentUser}_${contactChat}`)) ||
    JSON.parse(localStorage.getItem(`chat_${contactChat}_${currentUser}`)) ||
    [];
  messages.push(newMessage);
  localStorage.setItem(
    `chat_${currentUser}_${contactChat}`,
    JSON.stringify(messages)
  );
  localStorage.setItem(
    `chat_${contactChat}_${currentUser}`,
    JSON.stringify(messages)
  ); //clear input after sending message
  inputMessage.value = "";
  loadMessages(currentUser, contactChat);
  localStorage.removeItem(`typing_${currentUser}`);
}

function sendTypingIndicator(currentUser, contactChat) {
  localStorage.setItem(
    `typing_${currentUser}`,
    JSON.stringify({ user: currentUser, isTyping: true })
  );
  setTimeout(() => {
    localStorage.setItem(
      `typing_${currentUser}`,
      JSON.stringify({ user: currentUser, isTyping: false })
    );
  }, 2000);
}
function showTyping(contactChat) {
  const typingData = JSON.parse(localStorage.getItem(`typing_${contactChat}`));
  const typingIndicator = document.getElementById("typing-indicator");
  //if other user is styping show typing..
  if (typingData && typingData.isTyping) {
    typingIndicator.innerHTML = `  <section class="bubble-container">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>`;
  } else {
    typingIndicator.textContent = "";
  }
}
