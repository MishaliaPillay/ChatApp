function getCurrentUser() {
  return sessionStorage.getItem("currentUser");
}
function loginUser(username) {
  sessionStorage.setItem("currestUser", username);
  addUserToChat(username);
}
