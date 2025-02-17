function loadContacts(username) {
  const contactsList = document.getElementById("contacts-list");

  const allUsers = JSON.parse(localStorage.getItem("users")) || {};

  Object.entries(allUsers).forEach(([key, value]) => {
    const li = document.createElement("li");
    const button = document.createElement("a");
    li.textContent = `${key}`;
    contactsList.appendChild(li);
  });
}
