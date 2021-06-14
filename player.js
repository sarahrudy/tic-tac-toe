class Player {
  constructor(id, icon, currentTurn) {
    this.id = id;
    this.icon = icon;
    this.currentTurn = currentTurn;
    this.wins = 0;
  }

  tallyWin() {
    this.wins++
  }

  saveWinsToStorage() {
    // localStorage.setItem(use JSON here)
  }

  retrieveWinsFromStorage() {
  // be able to keep score until a "reset scores" button is pushed
  }
}
