//Create a constructor with 4 properties and 3 methods

function MakePizza(size, toppings, crust, sauce){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
    this.estimateDeliveryTime = function() {
        console.log("4mins")
    }
    this.burnMouth = function () {
        console.log("euuirewoq")
    }
    this.frisbee = function () {
        console.log("uiit67")
    }
}

let pizza = new MakePizza("medium", ["spinach", "garlic"], "deep dish", "white");



