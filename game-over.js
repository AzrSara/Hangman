// SPELVY
// Variabler
const testBtn = document.querySelector('#test-btn');
const gameView = document.querySelector('.window');
const gameOver = document.querySelector('#game-over');
const newGame = document.querySelector('.game-view');

// Skapar en funktion där spelvyn tas bort och game over vyn tas fram när man klickar på en knapp
function changeView() {

    gameView.style.display = 'none'
    gameOver.style.display = 'block'

}
// Anropar funktionen
testBtn.addEventListener ('click', changeView);

// Skapar en funktion där gameover vyn tas bort och spelvyn vyn tas fram när man klickar på en knapp
function changeViewBack() {

    gameOver.style.display = 'none'
    gameView.style.display = 'block'

}

// Anropar funktionen
newGame.addEventListener ('click', changeViewBack);
