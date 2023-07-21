const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const liList = document.createElement("li");
  liList.textContent = ingredient;
  liList.classList.add("item");
  fragment.appendChild(liList);
});

ulList.appendChild(fragment);































