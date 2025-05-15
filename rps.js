// This function prompts the user for a choice between
// rock, paper, or scissors.
function getUserChoice () {
  // This prompt makes a pop-up that asks for the user's choice.
  userInput = prompt("Rock, Paper, or Scissors?: ");
  // Changes the user's input to lowercase letters.
  userInput = userInput.toLowerCase();
  // This if/else statement is for error handling.
  // It checks the user's choice for spelling.
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log("Error: Invalid Input!");
  }
};


// This function determines the computer's choice
function getComputerChoice () {
  // This generates a random number between 0 (inclusive)
  // and 3 (exclusive). The floor method rounds it down
  // so the number generated is either 0, 1, or 2.
  let choice = Math.floor(Math.random()*3)
  // This assigns the computer's response based on the
  // number generated.
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "error";
      break;
  };
};


// This function takes the decisions of the user and the
// computer and determines who won the game.
function determineWinner(userChoice, computerChoice) {
  let winner; // Winner placeholder
  // This if/else statement block - determines the winner.
  if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    winner = "Player wins!";
    pScore++;
  } else if (userChoice === computerChoice) {
    winner = "It\'s a Tie!";
  } else {
    winner = "Computer wins!";
    cScore++;
  };
  // This prints the results to the console.
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(winner);
};


// This function asks the user if they want to play the game.
// If so, it calls all the necessary functions.
function rpsGame () {
  //startGame = prompt("Would you like to play rock-paper-scissors? (y/n): ");
  //startGame = startGame.toLowerCase();
  //if (startGame === "y") {
    // userChoice = getUserChoice();
    userChoice = playerChoice;
    document.querySelector("#print-psel").textContent = userChoice;
    computerChoice = getComputerChoice();
    document.querySelector("#print-csel").textContent = computerChoice;
    determineWinner(userChoice, computerChoice);
    updateScore(pScore, cScore);
  //}
}


// Version 2 - UI
// Below this point are the modifications to the program to add the functionality for the user interface, buttons, etc.

// Player Choice Buttons
let rbtn = document.querySelector("#rbtn"); // rock html button selector
let pbtn = document.querySelector("#pbtn"); // paper html button selector
let sbtn = document.querySelector("#sbtn"); // scissors html button selector

// Reset Button
let resetBtn = document.querySelector("#reset");

// Function Variables
let playerChoice; // Placeholder for player's selection
let pScore = 0; // Player Score
let cScore = 0; // Computer Score
let cRound = 0; // Current Round Counter

// Rock Button Event Listener
rbtn.addEventListener("click", () => {
  playerChoice = "rock";
  //console.log(playerChoice);
  rpsGame();
});

// Paper Button Event Listener
pbtn.addEventListener("click", () => {
  playerChoice = "paper";
  //console.log(playerChoice);
  rpsGame();
});

// Scissors Button Event Listener
sbtn.addEventListener("click", () => {
  playerChoice = "scissors";
  //console.log(playerChoice);
  rpsGame();
});

// Reset Button Event Listener
resetBtn.addEventListener("click", () => {
  pScore = 0;
  cScore = 0;
  cRound = -1;
  updateScore(pScore, cScore);
});

// Updates Scores and Current Round counter in DOM
function updateScore (pscore, cscore) {
  document.querySelector("#pscore").innerText = pscore;
  document.querySelector("#cscore").innerText = cscore;
  cRound++;
  document.querySelector("#cround").innerText = cRound;
}