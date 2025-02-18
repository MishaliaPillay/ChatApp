// Wait for form submission
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Call validation functions before proceeding
    if (validateForm()) {
      signup();
    }
  });

// Function to validate email format
function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const submitButton = document.getElementById("submit-button");

  if (!emailRegex.test(email)) {
    document.getElementById("email-feedback").innerHTML =
      "Please enter a valid email address.";
    return false;
  } else {
    document.getElementById("email-feedback").innerHTML = "";
    return true;
  }
}

// Function to validate password (length & spaces)
function validatePassword() {
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  if (password.length < 6 || password.replace(/\s/g, "").length === 0) {
    document.getElementById("password-feedback").innerHTML =
      "Password must be at least 6 characters and not just spaces.";
    return false;
  } else {
    document.getElementById("password-feedback").innerHTML = "";
  }

  if (password !== confirmPassword) {
    document.getElementById("confirm-password-feedback").innerHTML =
      "Passwords do not match.";
    return false;
  } else {
    document.getElementById("confirm-password-feedback").innerHTML = "";
  }

  return true;
}

// Function to check if all fields are valid before submission
function validateForm() {
  return validateEmail() && validatePassword();
}

// Signup function
function signup() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || {};

  //this checks is the username already exists , in local storgae
  //if users[]  returns true name is taken , else it is undefined and can be used
  if (users[username]) {
    document.getElementById("feedback-isUnique").innerHTML =
      "Username already taken! Please choose another.";
    return;
  }

  // Save user info in localStorage
  users[username] = { email, password };
  localStorage.setItem("users", JSON.stringify(users));
  console.log("Signed up successfully");

  // Redirect to login page after successful sign-up
  window.location.href = "login-page.html";
}
