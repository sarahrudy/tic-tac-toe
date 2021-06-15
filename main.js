var game = new Game() ;

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
  for (var i = 0; i < buttons.length; i++) {
    if (game.currentPlayer.id === game.player1.id && event.target.id === buttons[i].id) {
    buttons[i].innerHTML = '<img class="x-icon" src="assets/x.svg" alt="X">'
  } else if (game.currentPlayer.id === game.player2.id && event.target.id === buttons[i].id) {
  buttons[i].innerHTML = '<img class="o-icon" src="assets/o.svg" alt="O">'
  }
  console.log("buttons");
  // event.target.classList.add('disabled');
  }
}
