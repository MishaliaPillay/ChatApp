function getChatMessage() {
  return JSON.parse(localStorage.getItem("chatMessages")) || [];
}
function saveChatMessage(message) {
  let messages = getChatMessage();
  messages.push(message);
  localStorage.setItem("chatMessage", JSON.stringify(messages));
}
function getActiveUsers() {
  return JSON.parse(localStorage.getItem("activeUsers")) || [];
}

function saveActiveUsers(users) {
  localStorage.setItem("activeUsers", JSON.stringify(users));
}
