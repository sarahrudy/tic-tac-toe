class Player {
  constructor(id, icon) {
    this.id = id;
    this.icon = icon;
    this.wins = 0
    this.isWinner = false;
  }

  tallyWin() {
    this.wins++
  }

  saveWinsToStorage() {
    var stringOfWins = JSON.stringify(this.wins)
    localStorage.setItem(`${this.id}`, stringOfWins)
  }

  retrieveWinsFromStorage() {
    var retrievedWins = JSON.parse(localStorage.getItem(`${this.id}`))
    this.wins = retrievedWins || 0
  }
}
