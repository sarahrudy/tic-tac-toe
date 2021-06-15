var game = new Game() ;

// window.onlaod = boardDisplay
var buttons = document.querySelectorAll('button')
var gameplayText = document.querySelector('.gameplay-text')

window.addEventListener('load', loadPage)


function loadPage() {
  gameplayText.innerText = `YOUR TURN, ${game.player1.icon}!`
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      placeIcon(event)
    });
  }
}


function placeIcon(event) {
  event.preventDefault()
  if (event.target.classList.contains('cell')) {
    game.playerMove()
  }
}


// if(.cell-0.contains("X"))
