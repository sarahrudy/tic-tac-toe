class Player {
  constructor(id, icon) {
    this.id = id;
    this.icon = icon;
    this.wins = [];
    this.winner = false;
  }
}

saveWinsToStorage() {
  // push win into wins array
}

retrieveWinsFromStorage() {
  // be able to keep score until a "reset scores" button is pushed
}
