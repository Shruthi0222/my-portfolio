
function contactMe() {
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  if (email === "") {
    message.textContent = "Please enter your email.";
  } else {
    message.textContent = "Thank you for contacting me!";
  }
}
