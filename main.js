var game = new Game() ;

var buttons = document.querySelectorAll('button')
var gameplayText = document.querySelector('.gameplay-text')
var xNumWins = document.querySelector('.x-num-of-wins')
var oNumWins = document.querySelector('.o-num-of-wins')

window.addEventListener('load', loadPage)


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
  for (var i = 0; i < buttons.length; i++) {
    if (game.currentPlayer.id === game.player1.id && event.target.id === buttons[i].id) {
    gameplayText.innerText = `YOUR TURN, ${game.player2.icon}!`
    buttons[i].innerHTML = '<img class="x-icon" src="assets/x.svg" alt="X">'
  } else if (game.currentPlayer.id === game.player2.id && event.target.id === buttons[i].id) {
  gameplayText.innerText = `YOUR TURN, ${game.player1.icon}!`
  buttons[i].innerHTML = '<img class="o-icon" src="assets/o.svg" alt="O">'
  }
  // event.target.classList.add('disabled');
  }
  game.playerMove();
  game.evaluateBoard();
  game.switchPlayer();
  winnerWinnerChickenDinner();
}

function winnerWinnerChickenDinner() {
  if (game.player1.isWinner) {
    gameplayText.innerText = `${game.player1.icon} WON!`
    xNumWins.innerText =+ 1
  } else if (game.player2.isWinner) {
    gameplayText.innerText = `${game.player2.icon} WON!`
    oNumWins.innerText += 1
  }
}
