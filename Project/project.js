// array containing the choices of the game
const choices = ["ROCK", "PAPER", "SCISSORS"];

// DOM elements for displaying information
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const textDisplay = document.getElementById("textDisplay");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const ties = document.getElementById("ties");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const choiceButtons = document.querySelectorAll(".choices button");

// variables to track the scores, to be inputed at scoreboard
let winsScore = 0;
let lossesScore = 0;
let tiesScore = 0;

// initial content before starting the game.
textDisplay.textContent = `Click the "Start Game" button to start.`
playerDisplay.textContent = `PLAYER: `
computerDisplay.textContent = `COMPUTER: `

// event listener for "Start Game" button
startBtn.onclick = function() {
    choiceButtons.forEach(button => {  
        button.disabled = false;    // enabling the 3 buttons to prompt the user to choose a weapon
        textDisplay.textContent = `Choose your weapon!`
    });
};

// a function to play the game when a player has chosen a weapon
function playGame(playerChoice) {
    // randomly select the computer's choice by using this math formula
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""; // variable to store the result of the round, whether you win, you lose or a tie

    // if the game is a tie, we increment the tiesScore and update the tie count
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
        tiesScore++;
        ties.textContent = tiesScore;
    } 
    else { // if it is not a tie, then...
        switch (playerChoice) {
            case "ROCK":
                result = (computerChoice === "SCISSORS") ? "YOU WIN!" : "YOU LOSE!";
                textDisplay.textContent = `Click another weapon for the next round.`
                break;
            case "PAPER":
                result = (computerChoice === "ROCK") ? "YOU WIN!" : "YOU LOSE!";
                textDisplay.textContent = `Click another weapon for the next round.`
                break;
            case "SCISSORS":
                result = (computerChoice === "PAPER") ? "YOU WIN!" : "YOU LOSE!";
                textDisplay.textContent = `Click another weapon for the next round.`
                break;
        }
    }
    // display the player's and computer's choices, together with the result
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // resetting the text color of the result
    resultDisplay.classList.remove("greenText", "redText", "blackText");

    // update the result display based on the outcome
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            winsScore++;
            wins.textContent = winsScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            lossesScore++;
            losses.textContent = lossesScore;
            break;
        case "IT'S A TIE":
            resultDisplay.classList.add("blackText");
            break;
    }
}
// event listener for the "Reset Game" button
resetBtn.onclick = function() {
    // reset all displayed values to their initial state
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
    resultDisplay.textContent = "";
    winsScore = 0;
    lossesScore = 0;
    tiesScore = 0;
    wins.textContent = 0;
    losses.textContent = 0;
    ties.textContent = 0;
    textDisplay.textContent = `Click the "Start Game" button to start.`

    // disabling the 3 choices buttons after resetting the game
    choiceButtons.forEach(button => {
        button.disabled = true;
    })
}