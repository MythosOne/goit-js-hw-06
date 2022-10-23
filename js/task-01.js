// Number of categories: 3
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

console.log(`Number of categories: ${document.querySelectorAll(".item").length}`);

const firstElement = categories.firstElementChild;
console.log(`Category: ${(firstElement.querySelector("h2")).textContent}`);
console.log(`Elements: ${firstElement.querySelectorAll("li").length}`);

const secondElement = firstElement.nextElementSibling;
console.log(`Category: ${(secondElement.querySelector("h2")).textContent}`);
console.log(`Elements: ${secondElement.querySelectorAll("li").length}`);

const lastElement = categories.lastElementChild;
console.log(`Category: ${(lastElement.querySelector("h2")).textContent}`);
console.log(`Elements: ${lastElement.querySelectorAll("li").length}`);