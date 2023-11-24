// SPELVY
// Variabler
export const testBtn = document.querySelector('#test-btn');
export const gameView = document.querySelector('.window');
export const gameOver = document.querySelector('#game-over');
export const newGame = document.querySelector('.game-view');

// Skapar en funktion där spelvyn tas bort och game over vyn tas fram när man klickar på en knapp
export function changeView() {

    gameView.style.display = 'none'
    gameOver.style.display = 'block'

}
// Anropar funktionen
testBtn.addEventListener ('click', changeView);

// Skapar en funktion där gameover vyn tas bort och spelvyn vyn tas fram när man klickar på en knapp
export function changeViewBack() {

    gameOver.style.display = 'none'
    gameView.style.display = 'block'

}

// Anropar funktionen
newGame.addEventListener ('click', changeViewBack);
