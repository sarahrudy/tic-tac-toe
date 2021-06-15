class Game {
  constructor() {
    this.player1 = new Player("X", "𝗫");
    this.player2 = new Player("O", "◎");
    this.totalPlays = 0;
    this.currentPlayer = this.player1;
    this.boardDisplay = ["", "", "", "", "", "", "", "", ""];
    this.draw = false;
  }

  playerMove(click) {
    this.totalPlays++
    if(this.currentPlayer) {
    this.boardDisplay.splice(click, 1, this.currentPlayer.id)
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
  if (this.totalPlays >= 5 && this.totalPlays <= 9) {
    this.checkWinConditions()
    }
  }

  checkWinConditions() {
    if (this.boardDisplay[0] === this.boardDisplay[1] && this.boardDisplay[1] === this.boardDisplay[2] && this.boardDisplay[2] === this.currentPlayer.id) {
      this.updateWinner();
    } else if (this.boardDisplay[3] === this.boardDisplay[4] && this.boardDisplay[4] === this.boardDisplay[5] && this.boardDisplay[5] === this.currentPlayer.id) {
      this.updateWinner();
    } else if (this.boardDisplay[6] === this.boardDisplay[7] && this.boardDisplay[7] === this.boardDisplay[8] && this.boardDisplay[8] === this.currentPlayer.id) {
      this.updateWinner();
    } else if (this.boardDisplay[0] === this.boardDisplay[3] && this.boardDisplay[3] === this.boardDisplay[6] && this.boardDisplay[6] === this.currentPlayer.id) {
      this.updateWinner();
    } else if (this.boardDisplay[1] === this.boardDisplay[4] && this.boardDisplay[4] === this.boardDisplay[7] && this.boardDisplay[7] === this.currentPlayer.id) {
      this.updateWinner();
    } else if (this.boardDisplay[2] === this.boardDisplay[5] && this.boardDisplay[5] === this.boardDisplay[8] && this.boardDisplay[8] === this.currentPlayer.id) {
      this.updateWinner();
    } else if (this.boardDisplay[0] === this.boardDisplay[4] && this.boardDisplay[4] === this.boardDisplay[8] && this.boardDisplay[8] === this.currentPlayer.id) {
      this.updateWinner();
    } else if (this.boardDisplay[2] === this.boardDisplay[4] && this.boardDisplay[4] === this.boardDisplay[6] && this.boardDisplay[6] === this.currentPlayer.id) {
      this.updateWinner();
    } else if (this.totalPlays === 9) {
      this.draw = true
    }
  }

  updateWinner() {
    this.currentPlayer.isWinner = true
    this.currentPlayer.tallyWin()
  }

  reset() {
    this.boardDisplay = ["r", "r", "r", "r", "r", "r", "r", "r", "r"];
    this.totalPlays = 0
    this.player1.isWinner = false
    this.player2.isWinner = false
    this.draw = false
    this.currentPlayer = this.player1
  }
}
