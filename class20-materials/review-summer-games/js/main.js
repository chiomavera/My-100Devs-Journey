//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

// Using for loop

function alertProduct (arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
     product *= arr[i]
    }
    alert(product)
}

alertProduct([4, 5, 9, 10])

// using for Each method

// function alertProduct (arr) {
//     let product = 1;
//     arr.forEach((num) => product *= num)
//     console.log(product)
// }

// alertProduct([4, 5, 9, 10])
