var game = new Game()

var buttons = document.querySelectorAll('button')
var gameplayText = document.querySelector('.gameplay-text')
var xNumWins = document.querySelector('.x-num-of-wins')
var oNumWins = document.querySelector('.o-num-of-wins')
var gameboard = document.querySelector('.gameboard')

window.addEventListener('load', loadPage)

function loadPage() {
  gameplayText.innerText = `${game.player1.icon}, LET'S DO THIS!`
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      placeIcon(event)
    });
  loadLocalStorage()
  }
}

function placeIcon(event) {
  event.preventDefault()
  var click = event.target.id
  for (var i = 0; i < buttons.length; i++) {
    if (game.currentPlayer.id === game.player1.id &&
        click === buttons[i].id) {
      gameplayText.innerText = `YOUR TURN, ${game.player2.icon}!`
      buttons[i].innerHTML = '<img class="x-icon" src="assets/x.svg" alt="X">'
  } else if (game.currentPlayer.id === game.player2.id &&
              click === buttons[i].id) {
      gameplayText.innerText = `YOUR TURN, ${game.player1.icon}!`
      buttons[i].innerHTML = '<img class="o-icon" src="assets/o.svg" alt="O">'
    }
  }
  game.playerMove(click)
  game.evaluateBoard();
  game.switchPlayer();
  updateGameStatus()
}

function loadLocalStorage() {
  game.player1.retrieveWinsFromStorage()
  game.player2.retrieveWinsFromStorage()
  xNumWins.innerText = game.player1.wins
  oNumWins.innerText = game.player2.wins
}

function updateGameStatus() {
  if (game.player1.isWinner) {
    gameplayText.innerText = `${game.player1.icon} WON!`
    xNumWins.innerText = game.player1.wins
    startNewGame();
  } else if (game.player2.isWinner) {
    gameplayText.innerText = `${game.player2.icon} WON!`
    oNumWins.innerText = game.player2.wins
    startNewGame();
  } else if (game.draw === true) {
    gameplayText.innerText = 'IT\'S A DRAW!'
    startNewGame();
    }
   game.player1.saveWinsToStorage()
   game.player2.saveWinsToStorage()
  }

function startNewGame() {
  setTimeout(function () {
    var buttons = document.querySelectorAll('button')
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerText = ""
    }
    game.resetBoardData()
    gameplayText.innerText = 'LET\'S PLAY AGAIN!'
  }, 1000)
}
