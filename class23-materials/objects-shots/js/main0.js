//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// Make a carousel of drinks

document.querySelector("button").addEventListener("click", getDrink);

function getDrink () {
    let drink = document.querySelector("input").value.toLowerCase();

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        let drinks = data.drinks[0]
        console.log(drinks)

        // Fetch cocktail name
        console.log(drinks.strDrink)
        document.querySelector("#strDrink").innerText = drinks.strDrink
        
        // Drink thumbnail
        console.log(drinks.strDrinkThumb)
        document.querySelector("#strDrinkThumb").src = drinks.strDrinkThumb


        //ingredients
        document.querySelector("#ingredientsTitle").innerText = "Ingredients"

        const ingredientEntries = Object.entries(drinks).filter(([Key, value]) => Key.startsWith("strIngredient") && value);

         console.log(ingredientEntries)

        const ingredients = ingredientEntries.map (([key, value]) => value);

        console.log(ingredients)
        
       const ingredientList = document.querySelector("#strIngredients");

       ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientList.appendChild(listItem);
       }
       )

        //How to make cocktail
        document.querySelector("#instructionTitle").innerText = "Instruction"
        document.querySelector("#strInstructions").innerText = drinks.strInstructions

        // Video 
        const video = document.querySelector("#strVideo")
        //video.title = `How to make ${drink} cocktail`
        //video.src = drinks.strVideo
        video.innerHTML = `Watch how to make ${drink} cocktail`
        video.href = drinks.strVideo
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
