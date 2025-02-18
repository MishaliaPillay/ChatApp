document.addEventListener("DOMContentLoaded", () => {
  //get the current logged in user from the session stoarge
  const contactsList = document.getElementById("contacts-list");
  const currentUser = getCurrentUser();
  if (!currentUser) {
    window.location.href = "login-page.html";
    return;
  }

  function updateContactsList() {
    //clear current contacts list
    contactsList.innerHTML = "";

    const allUsers = JSON.parse(localStorage.getItem("users")) || {};

    //loop through each usre in the users obj
    Object.keys(allUsers).forEach((username) => {
      //skip the current user- so that they arent shown in their contacts list
      if (username !== currentUser) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = username;
        link.href = `contact-chat.html?user=${username}`;
        li.appendChild(link);
        contactsList.appendChild(li);
      }
    });
  }

  updateContactsList();
  //listen for change in local storgae so that new users are added
  window.addEventListener("storage", (event) => {
    if (event.key === "users") {
      updateContactsList();
    }
  });
});
