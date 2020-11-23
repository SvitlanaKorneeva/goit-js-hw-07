const category = document.querySelectorAll("li.item");
// console.log(`В списке ${category.length} категории`);

category.forEach(li => console.log(`Категория:${li.firstElementChild.textContent}\n Количество элементов: ${li.lastElementChild.children.length}`));
