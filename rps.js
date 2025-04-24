// Pseudo Code Outline of Program

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
  let winner; // Declares a variable, 'winner'
  // This if/else statement block processes the choices
  // and determines the winner.
  if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    winner = "Player wins!";
  } else if (userChoice === computerChoice) {
    winner = "It\'s a Tie!";
  } else {
    winner = "Computer wins!";
  };
  // This prints the results to the console.
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(winner);
};


// This function asks the user if they want to play the game.
// If so, it calls all the necessary functions.
function rpsGame () {
  startGame = prompt("Would you like to play rock-paper-scissors? (y/n): ");
  startGame = startGame.toLowerCase();
  if (startGame === "y") {
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
  }
}