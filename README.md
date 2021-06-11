## Tic Tac Toe

## Learning Goals

- Solidify and demonstrate your understanding of:
    - DRY JavaScript
    - localStorage to persist data
    - event delegation to handle similar event listeners
- Understand the difference between the data model and how the data is displayed on the DOM
- Iterate through/filter DOM elements using for loops
- Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

## Notes
- A timeout is used after a completed game to reset the board
- 3 JS files
- Plan out the HTML layout (colors and icons do not need to match, but overall layout should closely match the demo video)
- Create the Player class
- Create the Game class
- Make game fully playable without the DOM (manually updating the Game.board data, etc, from your console) to force yourself to think data-model-first
- Create central game board on the DOM
- Connect Game data model to the DOM
- Display the Player data in the sidebars
- Automatically reset the game board to allow for a new game to be played after the previous game is won
- Persist Player data using local storage (number of wins should persist across page refreshes)

- if a square already has a token in it, it does not REPLACE the token, that person just can't click (disabled)
- scrollable window!
- A timeout is used after a completed game to reset the board


## Things to Add If Time Allows
- player input name - replace icon with player name
