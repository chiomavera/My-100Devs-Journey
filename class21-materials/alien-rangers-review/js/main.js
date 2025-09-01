//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["bloodBath", "brotherHood", "bloodSisters"]
tvShows.forEach( show => console.log(show) )

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let nums = [6, 4, 7, 2, 8, 10]

let evenNums = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 ) {
        evenNums.push(nums[i])
    }
}

//console.log(evenNums)

// forEach

let onlyEven = []
nums.forEach(num => {
    if (num % 2 === 0) {
        onlyEven.push(num)
    }
})

//console.log(onlyEven)

// fiter
let Evens = arr => arr.filter(num => num % 2 === 0)
console.log(Evens(nums))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh (arr) {
    let sorted = arr.sort((a,b) => a-b)
    alert( sorted[1] + sorted[ sorted.length - 2])
}

sumSecondLowAndHigh([2,3,1,5,4])