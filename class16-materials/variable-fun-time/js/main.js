//--- Easy
//create a variable and assign it a number
let num =30;

//minus 10 from that number
num -= 10;

//print that number to the console
console.log(num)

//--- Medium
//create a variable that holds a value from the input
//let inputedValue = document.querySelector("#danceDanceRevolution").value // this runs immediately the page loads, reason the value is " "

//add 25 to that number
//inputedValue = inputedValue + 25 // the value of input is empty string "" , so what happens is contenation which converts number 25 to string "25"

//alert that number
//alert(inputedValue) 

//--- Hard
//create a variable that holds the h1
//const h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
// h1Holder.addEventListener("click", ()=> {
//     console.log(num + Number(inputedValue) ); // the number method converts the value to a number.
// })

//task: rewrite the code such that inputedValue runs only when the h1 is clicked 


document.querySelector('h1').addEventListener("click", clickMe)

function clickMe () {
    let inputedValue = Number( document.querySelector("#danceDanceRevolution").value) // get input value and convert it to a number

    inputedValue += 25;
    alert(inputedValue);
    console.log(num + inputedValue)
}


// Another, play around task. the funtion above, gets input from the user, converts the input value to a string, add 25 to it and then alerts the result. It also does another quick math of adding the value of num created outside the function block and logs the result to the console.

// My takeway from this mini challenge is that, the value gotten from the input field is a 'string' and to perform an arithmetic operation on it, it has to be converted to a numeric value else, the result of the math, will be a string as the function performed a concantenation (adding a string to number, converts the number to a string.)