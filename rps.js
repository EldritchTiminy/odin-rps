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
      return "Error: getComputerChoice";
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
    pScore += tieHand;
    cScore += tieHand;
    tScore++;
  } else {
    winner = "Computer wins!";
    cScore++;
  };
  // This prints the results to the console.
  //console.log(`You chose: ${userChoice}`);
  //console.log(`Computer chose: ${computerChoice}`);
  //console.log(winner);
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
    updateScore(pScore, cScore, tScore);
    scoreCheck(pScore, cScore, gMode);
  //}
}


// Version 2 - UI
// Below this point are the modifications to the program to add the functionality for the user interface, buttons, etc.


// Player Choice Buttons
let rbtn = document.querySelector("#rbtn"); // rock html button selector
let pbtn = document.querySelector("#pbtn"); // paper html button selector
let sbtn = document.querySelector("#sbtn"); // scissors html button selector


// Options Buttons
let resetBtn = document.querySelector("#reset"); // Reset Button Selector
let tie0 = document.querySelector("#tie0"); // Ties = 0 Button Selector
let tie1 = document.querySelector("#tie1"); // Both players +1 Button Selector

// Game Mode Buttons
let infGaMo = document.querySelector("#inf-game-mode"); // Infinite Button Selector
let b2GaMo = document.querySelector("#best2"); // Best 2/3 Button Selector
let b3GaMo = document.querySelector("#best3"); // Best 3/5 Button Selector
let b4GaMo = document.querySelector("#best4"); // Best 4/7 Button Selector


// Function Variables
let playerChoice; // Placeholder for player's selection
let pScore = 0; // Player Score
let cScore = 0; // Computer Score
let tScore = 0; // Tie Counter
let cRound = 0; // Current Round Counter
let tieHand = 0; // Tie Handler Score
let gMode = 0; // Game Mode Setting (0 - inf, 1 - Best 2/3, 2 - Best 3/5, 3 - Best 4/7)


// Event Listeners
// Player Choice Buttons
rbtn.addEventListener("click", () => { // Rock Button Event Listener
  playerChoice = "rock";
  //console.log(playerChoice);
  rpsGame();
});
pbtn.addEventListener("click", () => { // Paper Button Event Listener
  playerChoice = "paper";
  //console.log(playerChoice);
  rpsGame();
});
sbtn.addEventListener("click", () => { // Scissors Button Event Listener
  playerChoice = "scissors";
  //console.log(playerChoice);
  rpsGame();
});

// Options Buttons
resetBtn.addEventListener("click", resetGame); // Reset Button Event Listener
tie0.addEventListener("click", () => { // Ties = 0 Button Event Listener
  tieHand = 0;
  document.querySelector("#tscore").hidden = false;
  document.querySelector("#tscorep").hidden = false;
  document.querySelector("#thand").textContent = "Ties = 0";
});
tie1.addEventListener("click", () => { // Both players +1 Button Event Listener
  tieHand = 1;
  document.querySelector("#tscore").hidden = true;
  document.querySelector("#tscorep").hidden = true;
  document.querySelector("#thand").textContent = "Both players +1";
});

// Game Mode Buttons
infGaMo.addEventListener("click", () => {
  gMode = 0;
  document.querySelector("#gamemode").textContent = "Infinite";
});
b2GaMo.addEventListener("click", () => {
  gMode = 1;
  document.querySelector("#gamemode").textContent = "Best 2/3";
});
b3GaMo.addEventListener("click", () => {
  gMode = 2;
  document.querySelector("#gamemode").textContent = "Best 3/5";
});
b4GaMo.addEventListener("click", () => {
  gMode = 3;
  document.querySelector("#gamemode").textContent = "Best 4/7";
});



// New V2 Functions
function updateScore (pscore, cscore, tscore) { // Updates Scores and Current Round counter in DOM
  document.querySelector("#pscore").innerText = pscore;
  document.querySelector("#cscore").innerText = cscore;
  document.querySelector("#tscore").innerText = tscore;
  cRound++;
  document.querySelector("#cround").innerText = cRound;
}

function resetGame () { // Resets the game
  pScore = 0;
  cScore = 0;
  tScore = 0;
  cRound = -1;
  document.querySelector(".score").style.display = "inline-block";
  document.querySelector(".playerw").style.display = "none";
  document.querySelector(".compw").style.display = "none";
  document.querySelector(".tiew").style.display = "none";
  document.querySelector("#reset").style.backgroundColor = "";
  updateScore(pScore, cScore, tScore);
}

function scoreCheck (pscore, cscore, gameMode) {
  switch (gameMode) {
    case 0:
      break;
    case 1:
      if (pscore === 2 && cscore < 2) {
        gameFinish(0);
        //console.log("you win");
        // return "You Win!";
        //resetGame();
      } else if (cscore === 2 && pscore < 2) {
        gameFinish(1);
        //console.log("you lose");
        //return "The computer beat you!";
        //resetGame();
      } else if (cscore === 2 && pscore === 2) {
        gameFinish(2);
        //console.log("tie.");
        //resetGame();
      }
      break;
    case 2:
      if (pscore === 3 && cscore < 3) {
        gameFinish(0);
        //console.log("you win");
        // return "You Win!";
        //resetGame();
      } else if (cscore === 3 && pscore < 3) {
        gameFinish(1);
        //console.log("you lose");
        //return "The computer beat you!";
        //resetGame();
      } else if (cscore === 3 && pscore === 3) {
        gameFinish(2);
        //console.log("tie.");
        //esetGame();
      }
      break;
    case 3:
      if (pscore === 4 && cscore < 4) {
        gameFinish(0);
        //console.log("you win");
        // return "You Win!";
        //resetGame();
      } else if (cscore === 4 && pscore < 4) {
        gameFinish(1);
        //console.log("you lose");
        //return "The computer beat you!";
        //resetGame();
      } else if (cscore === 4 && pscore === 4) {
        gameFinish(2);
        //console.log("tie.");
        //resetGame();
      }
      break;
    default:
      console.log("Error: scoreCheck");
      break;
  }
}

function gameFinish (winner) {
  if (winner === 0) {
    document.querySelector(".score").style.display = "none";
    document.querySelector(".playerw").style.display = "inline-block";
    document.querySelector("#reset").style.backgroundColor = "red";
  } else if (winner === 1) {
    document.querySelector(".score").style.display = "none";
    document.querySelector(".compw").style.display = "inline-block";
    document.querySelector("#reset").style.backgroundColor = "red";
  } else if (winner === 2) {
    document.querySelector(".score").style.display = "none";
    document.querySelector(".tiew").style.display = "inline-block";
    document.querySelector("#reset").style.backgroundColor = "red";
  }
}