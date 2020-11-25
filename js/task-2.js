const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
console.log(ingredients);

const createList = ingredient => {
    const itemEl = document.createElement('li')
    itemEl.textContent = el;
    
    return itemEl;
};
const productList = ingredients.map(ingredient => createList(ingredient)); 
console.log(productList);

const productListRef = document.querySelector('#ingredients');
productListRef.append(...productList);

    
    



