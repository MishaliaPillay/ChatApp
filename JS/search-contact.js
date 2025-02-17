const loadContacts = (searchQuery = "") => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const contactsContainer = document.getElementById("contacts-list");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.username.toLowerCase().includes(searchQuery.toLowerCase()) &&
      contact.username !== getCurrentUser()
  );

  contactsContainer.innerHTML = filteredContacts
    .map(
      (contact) =>
        `<li onclick="window.location.href='contact-chat.html?user=${contact.username}'">${contact.username}</li>`
    )
    .join("");
};
document
  .getElementById("search")
  .addEventListener("input", (event) => loadContacts(event.target.value));
loadContacts();
