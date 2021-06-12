
// two player instances
var player1 = new Player("X", ".x-icon")
var player2 = new Player("O", ".o-icon")

// start with an empty board
var renderEmptyBoard = ["", "", "", "", "", "", "", "", ""]

// after player "X" clicks on one of the 9 buttons, update the board
var boardDisplay = ["X", "", "", "", "", "", "", "", ""]
// for example

var currentTurn = "X";
// starts off as "X" and after "X" picks a spot, update boardDisplay
// after X goes, update the data model
currentTurn = "O";

// winning combinations
var winnerWinnerChickenDinner = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// if buttons are selected by the X or O in the previous combinations, game is over and a winner is declared
// if X wins, increase .x-num-of-wins by 1
// if O wins, increase .o-num-of-wins by 1

function draw() {
  if (!boardDisplay.includes(winnerWinnerChickenDinner[0], winnerWinnerChickenDinner[1], winnerWinnerChickenDinner[2], winnerWinnerChickenDinner[3], winnerWinnerChickenDinner[4], winnerWinnerChickenDinner[5], winnerWinnerChickenDinner[6], winnerWinnerChickenDinner[7], winnerWinnerChickenDinner[8])
}

// if no winner or it's a draw, display winner message or draw message and automatically reset the board onClick anywhere on the screen

// create button to reset the game??
