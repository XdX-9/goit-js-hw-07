const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  let email = form.elements.email.value;
  let password = form.elements.password.value;
  email = email.trim();
  password = password.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const userData = {
    email: email,
    password: password,
  };
  console.log("userData:", userData);
  form.reset();
}
