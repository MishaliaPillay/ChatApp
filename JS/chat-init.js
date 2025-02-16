document.addEventListener("DOMContentLoaded", () => {
  //checks if the user is logged in using their session storage
  const currentUser = getCurrentUser();
  //checks if the user is loggedin , if not they are reddirected to login page
  if (!currentUser) {
    window.location.href = "login-page.html";
    return;
  }
  //gets the chat history
  loadMeesages();
  //gets all the active users
  loadUsers();

  document.getElementById("send-button").addEventListener("click", sendMessage);
  //check when a user is typing
  document
    .getElementById("message-input")
    .addEventListener("input", sendTypingIndicator);
  window.addEventListener("storage", handleStorageEvent);
});
