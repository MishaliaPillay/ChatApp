function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || {};

  //checks if there is a user with that name
  if (!users[username]) {
    document.getElementById("name-feedback").innerHTML =
      "Username does not exist";
    document.getElementById("login-feedback").innerHTML = "";
  } else {
    /*if the user successfullly signs it updates session storage
     to saythe the user is current user-this help to distinguish who is sending messages in chats*/

    if (users[username] && users[username].password === password) {
      sessionStorage.setItem("currentUser", username);
      addUserToChat(username);
      window.location.href = "general-chat-page.html";
    } else {
      document.getElementById("login-feedback").innerHTML =
        "Incorrect password. Please try agian";
    }
  }
}

//Clear the Feedback when the user starts typing again

document.getElementById("username").addEventListener("input", function () {
  document.getElementById("name-feedback").innerHTML = "";
});
document.getElementById("password").addEventListener("input", function () {
  document.getElementById("login-feedback").innerHTML = "";
});

function addUserToChat(username) {
  let activeUsers = JSON.parse(localStorage.getItem("activeUsers")) || [];

  if (!activeUsers.inculdes(username)) {
    activeUsers.push(username);
    localStorage.setItem("activeUsers", JSON.stringify(activeUsers));
  }
}
