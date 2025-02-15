document.addEventListener("DOMContentLoaded", () => {
  const currentUser = getCurrentUser();
  //make each ser login so that their tab acts as a new user in the chat
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  loadMeesages();
  loadUsers();

  document.getElementById("send-button").addEventListener("click", sendMessage);
  document
    .getElementById("message-input")
    .addEventListener("input", sendMessage);
  window.addEventListener("storage", handleStorageEvent);
});
