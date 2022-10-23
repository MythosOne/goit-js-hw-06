const fontSizeControl = document.querySelector("#font-size-control");
// console.log(fontSizeControl);
const text = document.querySelector("#text");
// console.log(text);

fontSizeControl.addEventListener("input", () => {
    text.style.fontSize = fontSizeControl.value + "px";
});
