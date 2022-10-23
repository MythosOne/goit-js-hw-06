function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
// console.log(button);
const span = document.querySelector(".color");
// console.log(span);

const buttonColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  span.textContent = document.body.style.backgroundColor;
};

button.addEventListener("click",buttonColor);


// Напиши скрипт, который изменяет цвета фона элемента < body > через 
// инлайн стиль при клике на button.change - color и выводит значение 
// цвета в span.color.