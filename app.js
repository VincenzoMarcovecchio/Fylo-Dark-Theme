const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", e => {
  let messages = [];
  if (email.value === "" || email.value == null) {
    messages.push("email is required");
  }
  if (messages.length > 0) {
    errorElement.innerText = messages.join(",");
    e.preventDefault();
  }
});
