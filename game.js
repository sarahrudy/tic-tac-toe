class Game {
  constructor() {
    this.player1 = new Player("X", ".x-icon", true);
    this.player2 = new Player("O", ".o-icon", false);
    this.totalPlays = 0;
    this.currentPlayer = this.player1;
    this.boardDisplay = ["", "", "", "", "", "", "", "", ""];
    this.hasWinner = false;
    this.draw = false;
  }

  // A Game should include:
  // A way to reset the Game’s board to begin a new game

  playerMove(player, cell) {
    this.totalPlays++
    if(player.currentTurn) {
    this.boardDisplay.splice(Number(cell), 1, player.id)
    this.updateTurn()
    }
  }

  switchPlayer(player) {
    this.currentPlayer = player
  }

// use toggle for this!
  updateTurn() {
    if (this.player1.currentTurn) {
      this.player1.currentTurn = false
      this.player2.currentTurn = true
      this.switchPlayer(this.player2)
      // return "it's player 2's turn" message here
    } else if (this.player2.currentTurn) {
      this.player1.currentTurn = true
      this.player2.currentTurn = false
      this.switchPlayer(this.player1)
      // return "it's player 1's turn" message here
    }
  }

  evaluateBoard() {
    if (this.totalPlays >= 5 && this.totalPlays <= 9) {
      this.checkWinConditions()
      // return "winning message" here
    } else if (this.totalPlays === 9 && !this.hasWinner) {
      this.draw = true
      // return "draw message" here
    }
  }

  checkWinConditions() {
    if(this.boardDisplay[0].includes(this.currentPlayer.id) &&
      this.boardDisplay[1].includes(this.currentPlayer.id) && this.boardDisplay[2].includes(this.currentPlayer.id))
      ||
      (this.boardDisplay[3].includes(this.currentPlayer.id) && this.boardDisplay[4].includes(this.currentPlayer.id) && this.boardDisplay[5].includes(this.currentPlayer.id))
      ||
      (this.boardDisplay[6].includes(this.currentPlayer.id) && this.boardDisplay[7].includes(this.currentPlayer.id) && this.boardDisplay[8].includes(this.currentPlayer.id))
      ||
      (this.boardDisplay[0].includes(this.currentPlayer.id) && this.boardDisplay[3].includes(this.currentPlayer.id) && this.boardDisplay[6].includes(this.currentPlayer.id))
      ||
      (this.boardDisplay[1].includes(this.currentPlayer.id) && this.boardDisplay[4].includes(this.currentPlayer.id) && this.boardDisplay[7].includes(this.currentPlayer.id))
      ||
      (this.boardDisplay[2].includes(this.currentPlayer.id) && this.boardDisplay[5].includes(this.currentPlayer.id) && this.boardDisplay[8].includes(this.currentPlayer.id))
      ||
      (this.boardDisplay[0].includes(this.currentPlayer.id) && this.boardDisplay[4].includes(this.currentPlayer.id) && this.boardDisplay[8].includes(this.currentPlayer.id))
      ||
      (this.boardDisplay[2].includes(this.currentPlayer.id) && this.boardDisplay[4].includes(this.currentPlayer.id) && this.boardDisplay[6].includes(this.currentPlayer.id))
        this.winner();
      }

  winner() {
    this.hasWinner = true
    this.currentPlayer.tallyWin()
  }

}

  // checkWinConditions() {
  //   var winConditions = [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8],
  //     [0,3,6],
  //     [1,4,7],
  //     [2,5,8],
  //     [0,4,8],
  //     [2,4,6]
  //   ]
  // for (var i = 0; i < winConditions.length ; i++)
  //   if(winConditions[i][0] === this.currentPlayer.id && winConditions[i][1] === this.currentPlayer.id && winConditions[i][2] === this.currentPlayer.id)
  //     this.hasWinner = true
  //     this.currentPlayer.tallyWin()
  //     }
  //   }


// if buttons are selected by the X or O in the previous combinations, game is over and a winner is declared
// if X wins, increase .x-num-of-wins by 1 (DOM)
// if O wins, increase .o-num-of-wins by 1 (DOM)

// function draw() {
//   if (!boardDisplay.includes(winnerWinnerChickenDinner[0], winnerWinnerChickenDinner[1], winnerWinnerChickenDinner[2], winnerWinnerChickenDinner[3], winnerWinnerChickenDinner[4], winnerWinnerChickenDinner[5], winnerWinnerChickenDinner[6], winnerWinnerChickenDinner[7], winnerWinnerChickenDinner[8])
// }

// if no winner or it's a draw, display winner message or draw message and automatically reset the board onClick anywhere on the screen

// create button to reset the game??
