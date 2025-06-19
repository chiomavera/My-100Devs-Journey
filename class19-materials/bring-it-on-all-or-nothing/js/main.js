// // *Variables*
// // Declare a variable, assign it a boolean, and alert the value.

let age = true;
//alert(age)

// // Declare a variable, reassign it to your favorite color, and console log the value

let favouriteColor = "gray";
favouriteColor = "Blue";

//console.log(favouriteColor)

// // *Functions*
// // Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function sum3NumsAndDivide (a, b, c, d) {
    return (a+b+c) / d
}

//sum3NumsAndDivide(4, 5, 6, 7)

// // Create a function that takes in 2 numbers. Console log the first number to the power of the second. call the function

function powOfNum (x,n) {
    let result = Math.pow(x,n)
    console.log(result)
}
//powOfNum(2,3)


// // *Conditionals*
// // Create a function that takes in a boolean and a string. if the boolean is true, alert the string. if the boolean is false, console log the string.

 function alertOrLog (boo, str) {
    boo ? alert (str) : console.log(str)
}

//alertOrLog(false, "I am a String")


//*Loops*

// Create a function that takes in a number, console log all values from 1 to that number, but if the number is divisible by 3 log 'fizz' instead of the number, and if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number.

//step1:
// Create a function that takes in a number

function fizzBuzz (num) {
    //console.log(num)

    //step2:
    // console log all values from 1 to that number

    for (i = 1; i <= num; i++) {
         //console.log(i)

        //step3:
        // if the number is divisible by 3 and 5 log "fizzBuzz" instead of that number.

        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzbBuzz')
        }

        //step4:
        // if the number is divisible by 3 log 'fizz' instead of the number

        else if (i % 3 === 0) {
            console.log('Fizz')
        }

        // if the number is divisible by 5 log "buzz" instead of the number

        else if (i % 5 === 0) {
            console.log('Buzz')
        }else {
            console.log(i)
        }
   }

}





