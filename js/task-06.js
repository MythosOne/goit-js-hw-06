const textInput = document.querySelector("#validation-input");
// console.log(textInput);
// const validInput = document.querySelector("style");
// console.log(validInput);

textInput.addEventListener("blur", () => {
    if (textInput.getAttribute("data-length") == textInput.value.length) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
  };
});

//6 також потрібно виправляти, ви перезаписуєте value інпута на андейайнд, 
// а там просто потрібно вішати і знімати класи