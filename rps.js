// Pseudo Code Outline of Program

// Program Function Skeleton
// - Get user input
// - Generate computer's response
// - Display Results
// - Announce Winner

// Main Function:
//  Loop Start:
//    Display: Would you like to play Rock, Paper, Scissors?
//    User Prompt: "Please type a response (y/n): "
//    If yes, start game. If no, break/end loop.
//      Display: "3, 2, 1, Shoot!"
//      User Prompt: "Please type a response (r/p/s): "
//      

function getUserChoice () {
  userInput = prompt("Rock, Paper, or Scissors?: ");
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log("Error: Invalid Input!");
  }
};

function getComputerChoice () {
  let choice = Math.floor(Math.random()*3)
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

function determineWinner(userChoice, computerChoice) {
  let winner;
  if ((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')) {
    winner = "Player wins!";
  } else if (userChoice === computerChoice) {
    winner = "It\'s a Tie!";
  } else {
    winner = "Computer wins!";
  };
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(winner);
};

function rpsGame () {
  startGame = prompt("Would you like to play rock-paper-scissors? (y/n): ");
  startGame = startGame.toLowerCase();
  if (startGame === "y") {
    userChoice = getUserChoice();
    computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
  }
}