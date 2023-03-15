const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsId = document.querySelector('#ingredients')
const ingredientsArray = ingredients.map(element =>{
  const ingredientItemLi = document.createElement('li');
  ingredientItemLi.classList.add('item');
  ingredientItemLi.textContent = element;

  return ingredientItemLi;
});

ingredientsId.append(...ingredientsArray) ;