// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood;
favFood = "Oha Soup";
//alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const str = "Hello World";

// Using charAt()
const secChar = str.charAt(1);
//alert(secChar)

// Using split()
const secondChar = str.split("");
//alert(secondChar[1]);

// Using the traition method
//alert(str[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function product(num1, num2, num3) {
  const product = (num1 / num2) * num3;

  alert(product);
}

//product(7, 8, 9)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num) {
  const cuberoot = Math.cbrt(num);

  console.log(cuberoot);
}

cubeRoot(1200);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function isSummer() {
  const summerMonthsByHemisphere = {
    northern: ["june", "july", "august"],
    southern: ["december", "january", "february"],
  };

  let hemisphere, month;

  // Get amd validate hemisphere
  while (true) {
    hemisphere = prompt("Enter your hemisphere (southern or northern):");
    if (!hemisphere || !(hemisphere in summerMonthsByHemisphere)) {
      alert("Invalid input. Please enter 'northern' or 'southern' ");
    } else {
      hemisphere = hemisphere.toLowerCase().trim();
      break;
    }
  }

  // Get and validate month
  while (true) {
    month = prompt("Enter a month:");
    if (!month || !isValidMonth(month)) {
      alert("Invalid input. Enter a valid month:");
    } else {
      month = month.toLowerCase().trim();
      break;
    }
  }

  // Check if it's a summer month
  if (summerMonthsByHemisphere[hemisphere].includes(month)) {
    alert("YAY, it's summer where you are!");
  } else {
    alert("Booo, not summer in your hemisphere.");
  }

  // Helper function to validate month name
  function isValidMonth(m) {
    const months = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return months.includes(m.toLowerCase().trim());
  }
}

isSummer();

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipMultiplesOfFive(num) {
  for (let i = 1; i <= num; i++) {
    if (!i % 5 === 0) {
      console.log(i);
    }
  }
}

skipMultiplesOfFive();
