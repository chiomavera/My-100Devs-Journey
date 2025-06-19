// *Variables*
// Create a variable and console log the value

const age = 20
//console.log(age)

// Create a variable, add 10 to it, and alert the value
let num = 1
//alert(num += 3)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subtract4AndAlert = (num1, num2, num3, num4) => {
    alert(num1 - num2 - num3 - num4)
}
 //subtract4AndAlert(6,7,8,9);

// Create a function that divides one number by another and returns the remainder
 function divideAndReturn (num1, num2) {
    return num1 / num2
 }

 divideAndReturn(10, 4)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addAndAlert (num1, num2) {
    if (num1 + num2 > 50 ) {
        alert("Jumanji");
    }
 }

 //addAndAlert(70,60)


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divideAndAlert (num1, num2, num3) {
    if ((num1 * num2 * num3 ) % 3 === 0) {
        alert("ZEBRA")
    }
 }

 //divideAndAlert(3, 3, 3)


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWordManyTimes (str, num) {
    for (i = 0; i < num; i++) {
        console.log(str)
    }
 }

 logWordManyTimes("value", 5);
