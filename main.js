var game = new Game() ;

var buttons = document.querySelectorAll('button')
var gameplayText = document.querySelector('.gameplay-text')
var xNumWins = document.querySelector('.x-num-of-wins')
var oNumWins = document.querySelector('.o-num-of-wins')
var gameboard = document.querySelector('.gameboard')

window.addEventListener('load', loadPage)
// gameboard.addEventListener('click', placeIcon)

function loadPage() {
  gameplayText.innerText = `${game.player1.icon}, LET'S DO THIS!`
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      placeIcon(event)
    });
  }
}

function placeIcon(event) {
  event.preventDefault()
  var click = event.target.id
  for (var i = 0; i < buttons.length; i++) {
    if (game.currentPlayer.id === game.player1.id && click === buttons[i].id) {
    gameplayText.innerText = `YOUR TURN, ${game.player2.icon}!`
    buttons[i].innerHTML = '<img class="x-icon" src="assets/x.svg" alt="X">'
  } else if (game.currentPlayer.id === game.player2.id && click ===     buttons[i].id) {
    gameplayText.innerText = `YOUR TURN, ${game.player1.icon}!`
    buttons[i].innerHTML = '<img class="o-icon" src="assets/o.svg" alt="O">'
    }
  }
  game.playerMove(click)
  game.evaluateBoard();
  game.switchPlayer();
  updateGameStatus()
}

function updateGameStatus() {
  if (game.player1.isWinner) {
    gameplayText.innerText = `${game.player1.icon} WON!`
    xNumWins.innerText = game.player1.wins
    clearBoard();
  } else if (game.player2.isWinner) {
    gameplayText.innerText = `${game.player2.icon} WON!`
    oNumWins.innerText = game.player2.wins
    clearBoard();
  } else if (game.draw === true) {
    gameplayText.innerText = 'IT\'S A DRAW!'
    clearBoard();
    }
  }

function clearBoard() {
  setTimeout(function () {
    var buttons = document.querySelectorAll('button')
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].innerText = ""
    }
    game.reset()
    gameplayText.innerText = 'LET\'S PLAY AGAIN!'
  }, 2000)
}
