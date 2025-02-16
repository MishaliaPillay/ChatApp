function getCurrentUser() {
  return sessionStorage.getItem("currentUser");
}
function loginUser(username) {
  sessionStorage.setItem("currestUser", username);
  addUserToChat(username);
}

function logoutUser() {
  sessionStorage.removeItem("currentUser");
  removeUserFromChat(getCurrentUser());
  window.location.href = "login-page.html";
}
