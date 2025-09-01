// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the strings, and print the value to the console.
let favDrink = " Zobo ".trim();
console.log(favDrink);

// Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWords = "An Apple a day, saves you from a doctor. A is for Apple";
if (multiWords.includes("Apple")) {
  console.log("The word Apple is present");
} else {
  console.log("No word like Apple in the string passed");
}

let str = "Banana Orange Guava Apple Cucumber";
if (str.search("Apple") !== -1) {
  // this condition is because search returns the index number of the substring and if the substring(word) doesn't exist it returns -1.
  console.log("yes");
} else {
  console.log("no");
}

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible.

// Using the built-in Math function
function rockPaperScissors() {
  const randomIndex = (array) => Math.floor(Math.random() * array.length);

  const choices = ["rock", "paper", "scissors"];
  const botChoice = choices[randomIndex(choices)];

  return botChoice;
}

//rockPaperScissors()

// Or
function rockPaperScissors2() {
  let random = Math.floor(Math.random());
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Conditionals
// Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function.

function checkWin(playerChoice) {
  let botChoice = rockPaperScissors();
  console.log(`Bot chose: ${botChoice}`);  
  if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    console.log("You Win");
  } else if (playerChoice === botChoice) {
    console.log("You Tied");
  } else {
    console.log("You Lose");
  }
}

//*Loops*
//Create a function that takes in an array of choices. Play the X times where x is the number of choices in the array. Print the results of each game to the console.

function PlayGameXTimes(arr){
   arr.forEach(choice => checkWin(choice));
}


PlayGameXTimes(["rock", "paper", "scissors"])