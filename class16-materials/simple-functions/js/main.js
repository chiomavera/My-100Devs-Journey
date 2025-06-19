//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNumAndAlert (num1, num2) {
   alert(num1 - num2)
}
//subTwoNumAndAlert(4, 5);

//create a function that divides three numbers and console logs the quotient
function divideAndReturnQuotient (num1, num2, num3) {
    console.log(num1 / num2 / num3 )
}
//divideAndReturnQuotient(5, 6, 8)

 //create a function that multiplys three numbers and returns the product
   function multiplyAndReturnProduct (num1, num2, num3) {
      return num1 * num2 * num3
   }
   //multiplyAndReturnProduct()

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function calculate (num1, num2, num3) {
   return (num1 + num2) % num3
}
//calculate()


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less than 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and log the remainder of dividing by the fourth number

function isGreaterThan100 (num1, num2, num3, num4) {
   let result;
   let product = num1 * num2;
   if (product === 100) {
      result = (num1 * num2 * num3 ) % num4;
      alert(result);
      return
   } 
   
   if(product < 100) {
      result = product - (num3 - num4)
      console.log(result)
      return
   }
   
   if(product > 100) {
      result = product + (num3 + num4)
      console.log(result)
      return
   }
}

// Test cases
//isGreaterThan100(25, 4, 39, 2) // checks the = 100 condition
//isGreaterThan100(25, 3, 39, 4) // checks the < 100 conditon
//isGreaterThan100(25, 7, 39, 4) // checks > 100 condition

 //task use the return value from 'multiplyAndReturnProduct' function
 const product = multiplyAndReturnProduct(4, 5, 6)
 console.log(product)