document.addEventListener("DOMContentLoaded", () => {
  // Get the current logged-in user from session storage
  const contactsList = document.getElementById("contacts-list");
  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "login-page.html";
    return;
  }

  function updateContactsList() {
    // Clear current contacts list
    contactsList.innerHTML = "";

    const allUsers = JSON.parse(localStorage.getItem("users")) || {};
    const activeUsers = JSON.parse(localStorage.getItem("activeUsers")) || [];

    // Loop through each user in the users object
    Object.keys(allUsers).forEach((username) => {
      // Skip the current user so they aren’t shown in their contacts list
      if (username !== currentUser) {
        const li = document.createElement("li");
        li.classList.add("contact-item");

        // User icon (Font Awesome)
        const userIcon = document.createElement("i");
        userIcon.classList.add("fa", "fa-user-circle", "contact-icon");

        // Contact link
        const link = document.createElement("a");
        link.textContent = username;
        link.href = `contact-chat.html?user=${username}`;
        link.classList.add("contact-link");

        // Online/Offline Indicator
        const statusIndicator = document.createElement("div");
        statusIndicator.classList.add("status-indicator");
        statusIndicator.classList.add(
          activeUsers.includes(username) ? "online" : "offline"
        );

        // Append elements
        li.appendChild(userIcon);
        li.appendChild(link);
        li.appendChild(statusIndicator);
        contactsList.appendChild(li);
      }
    });
  }

  updateContactsList();

  // Listen for changes in local storage so new users are added
  window.addEventListener("storage", (event) => {
    if (event.key === "users" || event.key === "activeUsers") {
      updateContactsList();
    }
  });
});

/*






document.addEventListener("DOMContentLoaded", () => {
  //get the current logged in user from the session stoarge
  const contactsList = document.getElementById("contacts-list");
  const currentUser = getCurrentUser();
  if (!currentUser) {
    window.location.href = "login-page.html";
    return;
  }

  function updateContactsList() {
    contactsList.innerHTML = "";

    const allUsers = JSON.parse(localStorage.getItem("users")) || {};
    const activeUsers = JSON.parse(localStorage.getItem("activeUsers")) || [];
    //loop through each usre in the users obj
    Object.keys(allUsers).forEach((username) => {
      //skip the current user- so that they arent shown in their contacts list
      if (username !== currentUser) {
        const li = document.createElement("li");
        li.classList.add("contact-item");

        const avatar = document.createElement("img");
        avatar.src =
          allUsers[username].avatar || "../images/default-avatar.png";
        avatar.classList.add("contact-avatar");

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("contact-info");

        const name = document.createElement("span");
        name.textContent = username;
        name.classList.add("contact-name");

        const statusIndicator = document.createElement("div");
        statusIndicator.classList.add("status-indicator");
        statusIndicator.classList.add(
          activeUsers.includes(username) ? "online" : "offline"
        );

        infoDiv.appendChild(name);
        li.appendChild(avatar);
        li.appendChild(infoDiv);
        li.appendChild(statusIndicator);
        contactsList.appendChild(li);
      }
    });
  }

  updateContactsList();
  //listen for change in local storgae so that new users are added
  window.addEventListener("storage", (event) => {
    if (event.key === "users" || event.key === "activeUsers") {
      updateContactsList();
    }
  });
});
*/
