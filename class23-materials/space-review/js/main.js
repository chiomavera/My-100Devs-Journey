//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [100, 220, 30, 50];

//alert(nums.reduce((acc, c) => acc + c, 0));

/**
    Reduce only works on an array.
    since we have 4 elements in our array, reduce will run 4 times, each time pluging each elements in our array and adding it to the "acc" accumulator. The "c" serves the current value
    the "0" is necesary compulsory, use it, when you're bothered about types.
*/

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = nums.map((num) => Math.pow(num, 2));

//Create a function that takes string
//Print the reverse of that string to the console
let stringReverse = (str) => (str.split("").reverse().join(""));
/**
 * split("") splits the string into an array of individual characters
 * reverse() reverses the order of those characters — last becomes first
 * join("") joins the characters back into a single string
 */
 
//Create a function that takes in a string
//Alert if the string is a palindrome or not

/** 
    A string is said to be palindrome if it remains the same on reading from both ends. It means that when you reverse a given string, it should be the same as the original string. For instance, the string 'level' is a palindrome because it remains the same when you read it from the beginning to the end and vice versa
*/

const palindromeCheck = str => alert(str === stringReverse(str))

palindromeCheck("level")

/**
 * In the palindromeCheck() function, we pass in a string — for example, "level". The function checks whether the original string reads the same backward by comparing it to the result of stringReverse(str). If both are equal, it's a palindrome, and alert(true) is shown; otherwise, alert(false).
 */