class Player {
  constructor(id, icon, currentTurn) {
    this.id = id;
    this.icon = icon;
    this.currentTurn = currentTurn;
    this.wins = [];
    this.winner = false;
  }


  saveWinsToStorage() {
  // push win into wins array
  }

  retrieveWinsFromStorage() {
  // be able to keep score until a "reset scores" button is pushed
  }
}
