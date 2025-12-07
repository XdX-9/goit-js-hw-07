const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  let temp = event.currentTarget.value;
  temp = temp.trim();
  if (temp === "") output.textContent = "Anonymous";
  else output.textContent = temp;
});
