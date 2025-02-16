function loadUsers() {
  const usersList = document.getElementById("users-list");
  //gets the active users from local storage
  const activeUsers = getActiveUsers();
  //clear the current active user list before updating it
  usersList.innerHTML = "";

  //loops through each active user and adds them to the list
  activeUsers.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.textContent = user;
    usersList.appendChild(userItem);
  });
}

function addUserToChat(username) {
  //get current list of active users
  let activeUsers = getActiveUsers();
  //if the curent user is not already in the list add them
  if (!activeUsers.includes(username)) {
    activeUsers.push(username);
    saveActiveUsers(activeUsers); //update the list to localstorage
  }
}
