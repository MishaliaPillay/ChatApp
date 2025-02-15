function loadUsers() {
  const usersList = document.getElementById("users-list");
  const activeUsers = getActiveUsers();

  usersList.innerHTML = "";
  activeUsers.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.textContent = user;
    usersList.appendChild(userItem);
  });
}

function addUserToChat(username) {
  let activeUsers = getActiveUsers();
  if (!activeUsers.includes(username)) {
    activeUsers.push(username);
    saveActiveUsers(activeUsers);
  }
}

function removeUserFromChat(username) {
  let activeUsers = getActiveUsers().filter((user) => user !== username);
  saveActiveUsers(activeUsers);
}
