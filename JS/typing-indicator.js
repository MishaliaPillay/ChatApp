let typingTimeout;

function pingIndicator() {
  const currentUser = getCurrentUser();
  if (!currentUser) return;

  localStorage.setItem(
    "typing",
    JSON.stringify({ user: currentUser, isTyping: true })
  );
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    localStorage.setItem(
      "typing",
      JSON.stringify({ user: currentUser, isTyping: false }),
      2000
    );
  });
}

function handleStorageEvent(event) {
  if (event.key === "chatMessages") {
    loadMeesages();
  } else if (event.key === "activeUsers") {
    loadUsers();
  } else if (event.key === "typing") {
    const typingData = JSON.parse(event.newValue);
    const typingStatus = document.getElementById("typing");

    if (typingData.user !== getCurrentUser() && typingData.isTyping) {
      typingStatus.textContent = `${typingData.user} is typing ...`;
    } else {
      typingStatus.textContent = "";
    }
  }
}
