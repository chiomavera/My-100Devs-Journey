// *Variables*
// Declare a variable, assign it a value, and alert the value

let userName = "vera";
//alert(userName);

// Create a variable, divide it by 10, and console log the value
let num = 20;
num /= 10
//console.log(num)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNums (a,b,c) {
   alert( a*b*c) 
}
//multiplyThreeNums(3,4,5)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoNumsAndSub (a,b,c,d) {
     
    console.log((a + b) - c - d)
 }
 //addTwoNumsAndSub(3,4,5,6)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function calculate (num1, num2, num3) {
   let quickMath = (100 + num1 - num2) / num3;
   if (quickMath > 25) {
      console.log("WE HAVE A WINNNA")
   }
}

//calculate(369,45, 7)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
 document.querySelector("#check").addEventListener('click', checkDay)

 function checkDay () {
   const day = document.querySelector("#day").value.toLowerCase()
   //console.log(day)
   const validDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
   if (day === '') {
      alert('Input cannot be enter');
      return
   }

   if (!validDays.includes(day)) {
      alert('Try again!')
      return
   }

   if (day === 'saturday' || day === 'sunday') {
      alert('WEEKEND')
   }else {
      alert("WEEK DAY")
   }

   // Extra Push
   // Figure what How the input field can be cleared using when the 'ok' button of the alert box is clicked
 }

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function countInThrees (num) {
 for (i = 1; i < num + 3; i += 3 ) {
   console.log(i)
 }
}

// The condition i < num + 3 allows the loop to continue a little beyond num, ensuring that the output meets or slightly exceeds the specified limit if needed.

