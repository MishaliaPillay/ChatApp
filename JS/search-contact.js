const loadContacts = (searchQuery = "") => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  const contactsContainer = document.getElementById("contacts-list");
  const filteredContacts = contacts.fliter((contact) =>
    contact.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  contactsContainer.innerHTML = filteredContacts
    .flter((contact) => contact.username !== getCurrentUser())
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
