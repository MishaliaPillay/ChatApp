//import { readJsonFile, writeToJsonFile } from "./github.js";

//onClick call this function
function signup() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || {};
  //this checks is the username already exists , in local storgae
  //if users[]  returns true name is taken , else it is undefined and can be used
  if (users[username]) {
    let nameTaken = "Username already taken! Please choose another.";
    document.getElementById("feedback-isUnique").innerHTML = nameTaken;
    return;
  }
  //this saves the username emaill,and password  , while using the username as a unique identifier
  users[username] = { email, password };
  localStorage.setItem("users", JSON.stringify(users));
  console.log("signed up success");
  console.log(users);
}

//Clear the Feedback when the user starts typing again

document.getElementById("username").addEventListener("input", function () {
  document.getElementById("feedback-isUnique").innerHTML = "";
});
