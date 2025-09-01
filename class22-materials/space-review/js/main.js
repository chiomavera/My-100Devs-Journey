//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
// let sum = 0;
// let nums = [3, 4, 5];

// for(let i = 0; i < nums.length; i++) {
//     sum += nums[i]
// }
// alert(sum)

let nums = [80, 30, 100];
let sum = nums.reduce((acc, curr) => acc + curr, 0); // the zero means start the concantenation as a number.
alert (sum);
// reduce runs once for each element in array, taking in two parameters-accumulator and current value. 


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
// function squaredNums (arr) {
//     arr.forEach(num => Math.s )
// }

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
