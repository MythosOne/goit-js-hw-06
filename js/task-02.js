const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");
// console.log(ingredientsRef);

const arrIngredients = ingredients.map(ingredient =>
  `<li class="item">${ingredient}`);
// console.table(arrIngredients);
ingredientsRef.insertAdjacentHTML("afterbegin", arrIngredients);
