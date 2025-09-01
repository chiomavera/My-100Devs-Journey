// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday;
favHoliday = "Decemeber".toUpperCase();
console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "Beautiful"
//alert(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function absoluteNum (num1, num2, num3, num4, num5) {
    let difference = 100 - (num1 - num2 - num3 - num4 - num5)
    alert(Math.abs(difference))
}

absoluteNum(6, -5, 7, -2, 3)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
 function logHighAndLow(n1, n2, n3) {
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)

    console.log(`The lowest number is ${min} and the highest num is ${max}`)
 }

 logHighAndLow(6, 2, 8)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails () {
//     let result = Math.random()

//     if(result < .5) {
//         return "heads" 
//     }else{
//         return "tails"
//     }
// }

const headsOrTails = _ => Math.random() < .5 ? "heads" : "tails"
//the underscore is used here because no parameter is being passed.

//console.log(headsOrTails)

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flip (x) {
    for (let i = 1; i <= x; i++) {
        let result = headsOrTails()
        console.log(result)
    }
} 

flip(1)