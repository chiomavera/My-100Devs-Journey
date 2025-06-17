// *Variables*
// Create a variable and console log the value

const myName = "Vera";
console.log(myName);

// Create a variable, add 10 to it, and alert the value
const num = 1;
alert(num + 10 );

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function calDifference(a, b, c, d) {
   const result = a - b - c - d;
  alert(`The difference is : ${result}`);
}

calDifference(4, 5, 7, 1);

// Create a function that divides one number by another and returns the remainder
function getReminder(a, b) {
    const result = a % b;
  console.log(`The reminder is: ${result}`);
}
getReminder(4, 3);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function isSumGreaterThan50 (a, b) {
   if ((a + b) > 50 ) {
    alert('Jumanji');
   }
}
isSumGreaterThan50(60, 59)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function isProductDivisibleBy3 (a, b, c) {
    if (((a * b * c) % 3) === 0 ) {
     alert("ZEBRA");
    }
 }
 isProductDivisibleBy3(3, 3, 3)