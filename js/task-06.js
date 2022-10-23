const textInput = document.querySelector("#validation-input");
// console.log(textInput);
const validInput = document.querySelector("style");
// console.log(validInput);

textInput.addEventListener("blur", () => {
    if (textInput.getAttribute("data-length") == textInput.value.length) {
        textInput.value = textInput.classList.add("valid");
    } else {
        textInput.value = textInput.classList.add("invalid");
  };
});