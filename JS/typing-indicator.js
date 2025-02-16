let typingTimeout;
//show the typing status to users
function sendTypingIndicator() {
  const currentUser = getCurrentUser();
  if (!currentUser) return;
  //store the typing status in local storage
  localStorage.setItem(
    "typing",
    JSON.stringify({ user: currentUser, isTyping: true })
  ); //clear previous timeout if user is typing;
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    localStorage.setItem(
      "typing",
      JSON.stringify({ user: currentUser, isTyping: false })
    );
  }, 2000);
}

function handleStorageEvent(event) {
  if (event.key === "chatMessages") {
    loadMeesages(); //updates messages
  } else if (event.key === "activeUsers") {
    loadUsers();
  } else if (event.key === "typing") {
    const typingData = JSON.parse(event.newValue);
    const typingStatus = document.getElementById("typing");
    //only show typing if somone other than curerent user is typing
    if (typingData.user !== getCurrentUser() && typingData.isTyping) {
      typingStatus.textContent = `${typingData.user} is typing ...`;
    } else {
      typingStatus.textContent = "";
    }
  }
}
