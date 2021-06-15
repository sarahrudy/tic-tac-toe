class Game {
  constructor() {
    this.player1 = new Player("X", "❌");
    this.player2 = new Player("O", "◎");
    this.totalPlays = 0;
    this.currentPlayer = this.player1;
    this.boardDisplay = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    this.draw = false;
  }

  playerMove() {
    this.totalPlays++
    if (this.currentPlayer === this.player1 || this.player2) {
      for (var i = 0; i < this.boardDisplay.length; i++) {
        if (this.boardDisplay[i] === event.target.id)
          this.boardDisplay[i] = this.currentPlayer.id
      }
    }
  }

  switchPlayer() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1
    }
  }

  evaluateBoard() {
    this.checkWinConditions(this.player1)
    this.checkWinConditions(this.player2)
  }


  checkWinConditions() {
    for (var i = 0; i < this.boardDisplay.length; i++) {
      if (this.boardDisplay[0] === this.boardDisplay[1] && this.boardDisplay[1] === this.boardDisplay[2] && this.boardDisplay[2] === this.currentPlayer.id) {
        this.winner();
      } else if (this.boardDisplay[3] === this.boardDisplay[4] && this.boardDisplay[4] === this.boardDisplay[5] && this.boardDisplay[5] === this.currentPlayer.id) {
        this.winner();
      } else if (this.boardDisplay[6] === this.boardDisplay[7] && this.boardDisplay[7] === this.boardDisplay[8] && this.boardDisplay[8] === this.currentPlayer.id) {
        this.winner();
      } else if (this.boardDisplay[0] === this.boardDisplay[3] && this.boardDisplay[3] === this.boardDisplay[6] && this.boardDisplay[6] === this.currentPlayer.id) {
        this.winner();
      } else if (this.boardDisplay[1] === this.boardDisplay[4] && this.boardDisplay[4] === this.boardDisplay[7] && this.boardDisplay[7] === this.currentPlayer.id) {
        this.winner();
      } else if (this.boardDisplay[2] === this.boardDisplay[5] && this.boardDisplay[5] === this.boardDisplay[8] && this.boardDisplay[8] === this.currentPlayer.id) {
        this.winner();
      } else if (this.boardDisplay[0] === this.boardDisplay[4] && this.boardDisplay[4] === this.boardDisplay[8] && this.boardDisplay[8] === this.currentPlayer.id) {
        this.winner();
      } else if (this.boardDisplay[2] === this.boardDisplay[4] && this.boardDisplay[4] === this.boardDisplay[6] && this.boardDisplay[6] === this.currentPlayer.id) {
        this.winner();
      } else if (this.totalPlays === 9) {
        this.drawGame = true;
      }
    }
  }

  winner() {
    if (this.currentPlayer === this.player1) {
      this.player1.isWinner = true
      this.player1.tallyWin()
    } else if (this.currentPlayer === this.player2) {
      this.player2.isWinner = true
      this.player2.tallyWin()
    }
  }
  // A way to reset the Game’s board to begin a new game
  // A timeout is used after a completed game to reset the board.
}
