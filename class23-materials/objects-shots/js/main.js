//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// Make a carousel of drinks

let drinks = [];
let currentDrinkIndex = 0;

document.querySelector("button").addEventListener("click", getDrink);

function getDrink () {
    let choice = document.querySelector("input").value.toLowerCase();

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        drinks = data.drinks;
        console.log(drinks)
        currentDrinkIndex = 0;

        renderDrink(drinks[currentDrinkIndex])
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function renderDrink(drink) {
    // cocktail name
        document.querySelector("#strDrink").innerText = drink.strDrink
        
        // Drink thumbnail
        document.querySelector("#strDrinkThumb").src = drink.strDrinkThumb


        //ingredients
       const ingredientList = document.querySelector("#strIngredients");
        ingredientList.innerHTML = ""; 

        for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            const measure = drink[`strMeasure${i}`];

            if (ingredient) {
                const listItem = document.createElement("li")
                listItem.textContent = `${measure || ""} ${ingredient}.trim()`
                ingredientList.appendChild(listItem)
            }
        }
       
        //How to make cocktail
        document.querySelector("#strInstructions").innerText = drink.strInstructions

        // Video 
        const video = document.querySelector("#strVideo")
        if (drink.strVideo) {
            video.innerText = "Watch Tutorial"
            video.href = drink.strVideo
            video.style.display = "inline";
        }else {
            video.style.display = "none";
        }
}

document.querySelector("#next").addEventListener("click", () => {
    console.log("prev")
    currentDrinkIndex++
    if(currentDrinkIndex >= drinks.length) {
        currentDrinkIndex = 0;
    }

    renderDrink(drinks[currentDrinkIndex])
});

document.querySelector("#prev").addEventListener("click", () => {
    console.log("prev")
    currentDrinkIndex--
    if(currentDrinkIndex < 0) {
        currentDrinkIndex = drinks.length - 1;
    }

    renderDrink(drinks[currentDrinkIndex])
});