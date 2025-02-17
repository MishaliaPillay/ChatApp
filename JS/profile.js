const currentUser = sessionStorage.getItem("currentUser");
if (currentUser) {
  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[currentUser]) {
    const usernameField = document.getElementById("username");
    const emailField = document.getElementById("email");

    usernameField.value = currentUser || "not available";
    emailField.value = users[currentUser].email || "not available";
  }
}
