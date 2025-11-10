const button = document.querySelector("#create-btn");
const nameInput = document.querySelector("#dish-name");
const ingredientsInput = document.querySelector("#dish-ingredients");
const directionsInput = document.querySelector("#dish-directions");
const warningLabel = document.querySelector("#warning-label");
const recipe = document.querySelector("#recipe");

button.addEventListener("click", createRecipe);

function createRecipe(e) {
  e.preventDefault();
  if (!nameInput.value && !ingredientsInput.value && !directionsInput.value) {
    warningLabel.style.display = "block";
    return;
  }
  warningLabel.style.display = "none";

  ///////////////////////////////////////////////////////

  let container = document.createElement("div");
  container.setAttribute("id", "output");
  recipe.appendChild(container);

  /////////////////////////////////////////////////////

  let newDivDishName = document.createElement("div");
  newDivDishName.setAttribute("id", "heading-holder");
  container.appendChild(newDivDishName);

  let dishName = document.createElement("h2");
  dishName.innerHTML = nameInput.value;
  nameInput.value = "";
  newDivDishName.appendChild(dishName);

  ////////////////////////////////////////

  let newDivIngredientsHolder = document.createElement("div");
  newDivIngredientsHolder.setAttribute("id", "ingredients-holder");
  container.appendChild(newDivIngredientsHolder);

  let ingredientHeading = document.createElement("h3");
  ingredientHeading.innerHTML = "Ingredients";
  newDivIngredientsHolder.appendChild(ingredientHeading);

  let newIngredientList = document.createElement("ul");
  newDivIngredientsHolder.appendChild(newIngredientList);

  const ingredientList = ingredientsInput.value.split(",").map((i) => i.trim());
  ingredientList.forEach((item) => {
    const ingredient = document.createElement("li");
    ingredient.textContent = item;
    ingredientsInput.value = "";
    newIngredientList.appendChild(ingredient);
  });

  /////////////////////////////////////////////////////////
  let newDivDirectionsHolder = document.createElement("div");
  newDivDirectionsHolder.setAttribute("id", "directions-holder");
  container.appendChild(newDivDirectionsHolder);

  let directionHeading = document.createElement("h3");
  directionHeading.innerHTML = "Directions";
  newDivDirectionsHolder.appendChild(directionHeading);

  let newDirectionList = document.createElement("ol");
  newDivDirectionsHolder.appendChild(newDirectionList);

  const directionList = directionsInput.value.match(/[^\.!\?]+[\.!\?]+/g) || [];
  directionList
    .map((i) => i.trim())
    .forEach((item) => {
      const direction = document.createElement("li");
      direction.textContent = item;
      directionsInput.value = "";
      newDirectionList.appendChild(direction);
    });

  //////////////////////////////////////////////////////////

  let xButton = document.createElement("button");
  xButton.innerHTML = `<span class="material-symbols-outlined">
  delete
  </span>
  `;
  xButton.classList.add("x-btn");
  container.appendChild(xButton);

  xButton.addEventListener("click", () => {
    container.remove();
  });
}
