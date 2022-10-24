const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const ingredientsRef = document.querySelector("#ingredients");
// console.log(ingredientsRef);

const arrIngredients = [];

for (let i = 0; i < ingredients.length; i += 1){
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent= ingredients[i];
  arrIngredients.push(li);
}
ingredientsRef.append(...arrIngredients);

// Но первый способ более коммпактный ";-))"
// Доброго дня, в 2 завданні немає закриваючої лішки і воно зроблено не 
// по ТЗ, виправте 
// Створить окремий елемент <li>. Обов'язково використовуй метод 
// document.createElement().


// const arrIngredients = ingredients.map(ingredient =>
//   `<li class="item">${ingredient}</li>`);
// console.table(arrIngredients);
// ingredientsRef.insertAdjacentHTML("afterbegin", arrIngredients);
