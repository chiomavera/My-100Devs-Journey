//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

// USING FOR LOOP
// STEPS:
/**
    1. Define a function onlyEvens that takes an array.

    2. Create a new array (Evens) to store even numbers.

    3. Use a for loop to iterate over each number.

    4. Check if the number is even using arr[i] % 2 === 0.

    5. Pushing even numbers into the Evens array.

    6. Return the result.
**/

function onlyEvens (arr) {
    const evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i])
        }
    }
    return evens
}

onlyEvens([1, 8, 9, 7, 8, 9, 10, 45, 56, 78 ,90]);

// Using forEach
// Steps
/**
✅ Define a function onlyEvens that takes an array as its parameter.

✅ Create an empty array Evens.

✅ Loop through the original array using forEach.

✅ Inside the callback, check if the number is even (num % 2 === 0) and push it into Evens.

✅ You return the final array.
 */

function onlyEvens(arr) {
  const evens = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evens.push(num);
    }
  });
  return evens;
}

onlyEvens([1, 8, 9, 7, 8, 9, 10, 45, 56, 78 ,90]);

// Using filter method
// Steps
/**
    ✅ Define a function `onlyEvens` that takes an array as its parameter.

    ✅ Use the `.filter()` method to iterate over the array and keep only even numbers.

    ✅ Store the filtered result in a variable called `evens`.

    ✅ Return or log the `evens` array.
 */

function onlyEvens(arr) {
  const evens = arr.filter((num) => num % 2 === 0);
  console.log(evens);
}

onlyEvens([1, 8, 9, 7, 8, 9, 10, 45, 56, 78 ,90]);

