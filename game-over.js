// SPELVY
import { words } from "./svenska-ord.js";

export const testBtn = document.querySelector('#test-btn');
export const gameView = document.querySelector('.window');
export const gameOver = document.querySelector('#game-over');
export const newGame = document.querySelector('.game-view');
export const winLose = document.querySelector('.win-lose');
export const win = document.createElement('p');
win.textContent = 'Grattis!';
export const lose = document.createElement('p');
lose.textContent = 'Tyvärr, du förlorade :(';
export const wordWas = document.querySelector('.word-was');
export const quantityGuesses = document.querySelector('.quantity-guesses');
export const winEmoji = document.querySelector('.win-emoji');
export const loseEmoji = document.querySelector('.lose-emoji');
export const winningSound = document.querySelector('.win-sound')
export const losingSound = document.querySelector('.lose-sound')


// function slumpaOrd() {
//     const slumpIndex = Math.floor(Math.random() * words.length);
//     return words[slumpIndex];
// }

// Skapar en funktion där spelvyn tas bort och game over vyn tas fram när man klickar på en knapp
export function changeFromGameView() {
    gameView.style.display = 'none';
    gameOver.style.display = 'block';

    winLose.innerText = '';
    winEmoji.style.display = 'none'
    loseEmoji.style.display = 'none'

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber % 2 === 0) {
        winLose.append(win);
        winEmoji.style.display = 'block'
        winningSound.play();
    } else {
        winLose.append(lose);
        loseEmoji.style.display = 'block'
        losingSound.play()
    }

    const slumpatOrd = slumpaOrd();
    wordWas.textContent = 'Ordet var: ' + slumpatOrd;
}



// Anropar funktionen
testBtn.addEventListener ('click', changeFromGameView);

// Skapar en funktion där gameover vyn tas bort och spelvyn vyn tas fram när man klickar på en knapp
export function changeFromGameOver() {

    gameOver.style.display = 'none'
    gameView.style.display = 'block'

}

// Anropar funktionen
newGame.addEventListener ('click', changeFromGameOver);


