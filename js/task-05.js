const input = document.querySelector("#name-input");
// console.log(input);

const output = document.querySelector("#name-output");
// console.log(output);
const textAnonimus = output.textContent;

input.addEventListener("input", (event) => {
    if (event.currentTarget.value) {
        output.textContent = event.currentTarget.value;
        return;
    }
    output.textContent = textAnonimus;
});

//5 завдання потрібно виправляти, якщо я ввів щось в інпут і видалив не 
// повертається анонімус