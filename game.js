class Game {
  constructor() {
    this.player1 = new Player("X", ".x-icon", true);
    this.player2 = new Player("O", ".o-icon", false);
    this.totalPlays = 0;
    this.currentPlayer = this.player1;
    this.boardDisplay = ["", "", "", "", "", "", "", "", ""];
    this.hasWinner = false;
  }


  playerMove(player, cell) {
    this.totalPlays++
    if(player.currentTurn) {
    this.boardDisplay.splice(Number(cell), 1, player.id)
    this.updateTurn()
    }
  }

// use this one if you end up removing this.currentTurn from Player properties in constructor
// also remove currentTurn paramater and third argument in this.player1/this.player2 in game class
  // playerMove(player, cell) {
  //   this.totalPlays++
  //   if(this.currentPlayer) {
  //   this.boardDisplay.splice(Number(cell), 1, player.id)
  //   this.updateTurn()
  //   }
  // }

  switchPlayer(player) {
    this.currentPlayer = player
  }

  updateTurn() {
    if (this.player1.currentTurn) {
      this.player1.currentTurn = false
      this.player2.currentTurn = true
      this.switchPlayer(this.player2)
    } else if (this.player2.currentTurn) {
      this.player1.currentTurn = true
      this.player2.currentTurn = false
      this.switchPlayer(this.player1)
      }
    }
  }

  //have to be able to check them against the possible win conditions
  //parse through arrays with for loop
  // evaluateBoard() {
  //   // logic to check number of total plays
  //   // if total plays is >= 5 && <= 9, check board against winning combinations
  //   // if totalPlays = 9 and no winning coditions are met, then it's a draw
  //
  // }

// draw() {
//   if (this.totalPlays === 9 && )
// }
winner() {
var winningCells = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
this.hasWinner = true
player.wins++
}

//

// if buttons are selected by the X or O in the previous combinations, game is over and a winner is declared
// if X wins, increase .x-num-of-wins by 1
// if O wins, increase .o-num-of-wins by 1

// function draw() {
//   if (!boardDisplay.includes(winnerWinnerChickenDinner[0], winnerWinnerChickenDinner[1], winnerWinnerChickenDinner[2], winnerWinnerChickenDinner[3], winnerWinnerChickenDinner[4], winnerWinnerChickenDinner[5], winnerWinnerChickenDinner[6], winnerWinnerChickenDinner[7], winnerWinnerChickenDinner[8])
// }

// if no winner or it's a draw, display winner message or draw message and automatically reset the board onClick anywhere on the screen

// create button to reset the game??
