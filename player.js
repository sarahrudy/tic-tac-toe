class Player {
  constructor(id, icon) {
    this.id = id;
    this.icon = icon;
    this.wins = 0;
    this.isWinner = false;
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
