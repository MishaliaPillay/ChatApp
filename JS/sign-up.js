document
  .getElementById("create-user")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const user = {
      username,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
    window.location.href = "general-chat-page.html";
  });
