// *Variables*
// Declare a variable and assign it to a sentence as a string. Alert if the sentance is a question
let str = "What's today's date?"
alert(str.endsWith("?"));

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multiWords = "I'm looking for a Jr. Dev role"

console.log(multiWords.replace("Jr. Dev", "Software Engineer"));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors () {
    // Define a function that returns a random valid index for any given array
    const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
    
    // Define the possible choices the bot can make
    const choices = ["rock", "paper", "scissors"];

    // Use the randomIndex function to pick one of the choices at random
    const botChoice = choices[randomIndex(choices)];

    // Output the selected choice
    return botChoice;
    //console.log(botChoice)
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
//Game rule: Rock beats scissors, scissors beats paper, and paper beats rock. 
function checkWin(playerChoice) {
    let botChoice = rockPaperScissors(); // get bot'd move
    console.log(`Bot Chose: ${botChoice}`)

    // Check win conditions
    if ( (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper") ) {
        console.log("You Win")
    } else if (playerChoice === botChoice) {
        console.log("You Tied")
    }else {
        console.log("You Lose")
    }
}
//checkWin("Paper")

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes (arr) {
    arr.forEach(choice => checkWin(choice));
}

playGameXTimes(["rock", "paper", "scissors"])