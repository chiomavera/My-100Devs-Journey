//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ['bring It On', 'Indepence Day', 'Tailor My Heart']

for (i=0; i < movies.length; i++) {
 document.querySelector('#displayMovies').innerText +=  movies[i];
}

// //Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [40, 50, 75]

nums.forEach((num, i) => {
 nums[i] += 3
})


// //Find the average of all the numbers from question two


//nums.forEach((num) => sum +=  num )

let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
}

console.log('Average:', sum / nums.length)