const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// console.log(ingredients);

<<<<<<< HEAD
const createList = ingredient => {
    const itemEl = document.createElement('li')
    itemEl.textContent = ingredient;
    
    return itemEl;
=======
const createList = (ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;

  return itemEl;
>>>>>>> af336fef27e82dee527626e0d8ae33140a541c22
};
const productList = ingredients.map((ingredient) => createList(ingredient));
console.log(productList);

const productListRef = document.querySelector("#ingredients");
productListRef.append(...productList);
