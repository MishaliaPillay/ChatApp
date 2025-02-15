function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "get-started-page.html";
}
