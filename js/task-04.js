let counterValue = 0;
const buttonDown = document.querySelector(`[data-action="decrement"]`);
const buttonUp = document.querySelector(`[data-action="increment"]`);
const span = document.querySelector("#value");
// console.log(buttonDown);
// console.log(buttonUp);
// console.log(span);

const downClick = () => {
    span.textContent = (counterValue -= 1);
    // console.log(span.textContent);
};

const upClick = () => {
        span.textContent = (counterValue += 1);
    // console.log(span.textContent);
};

buttonDown.addEventListener("click", downClick);
buttonUp.addEventListener("click", upClick);
