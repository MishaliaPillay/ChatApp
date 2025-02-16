document.addEventListener("DOMContentLoaded", () => {
  const currentUser = getCurrentUser();
  //make each ser login so that their tab acts as a new user in the chat
  if (!currentUser) {
    window.location.href = "login-page.html";
    return;
  }

  loadMeesages();
  loadUsers();

  document.getElementById("send-button").addEventListener("click", sendMessage);
  document
    .getElementById("message-input")
    .addEventListener("input", sendTypingIndicator);
  window.addEventListener("storage", handleStorageEvent);
});
