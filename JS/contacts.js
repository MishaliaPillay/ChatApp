function loadContacts(username) {
  const contactsList = document.getElementById("contacts-list");

  const allUsers = JSON.parse(localStorage.getItem("users")) || {};

  Object.entries(allUsers).forEach(([key, value]) => {
    const li = document.createElement("li");
    li.textContent = `${key}`;
    contactsList.appendChild(li);
  });
}
//clear the current active user list before updating it
/*  console.log(allUsers);
  let usersList = allUsers[username];
  allUsers.username.forEach((listUsers) => {
    const li = document.createElement("li");
    li.textContent = JSON.stringify(listUsers);
    contactsList.appendChild(li);
  });

  //loops through each active user and adds them to the list
  allUsers.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.textContent = user;
    ContactsList.appendChild(userItem);  });*/
