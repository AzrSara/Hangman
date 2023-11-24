

// skapar funktion för att flytta Namnet över gubben
function displayName() {
    const inputElement = document.querySelector('.name-input');
    const inputValue = inputElement.value;
    const outputElement = document.querySelector('.name-output');
    const startBtn = document.querySelector('.game-starter')

    outputElement.textContent = inputValue;

    inputElement.style.display = 'none';
    startBtn.style.display = 'none';
}

const startBtn = document.querySelector('.game-starter')
const inputElement = document.querySelector('.name-input');

// anropar funktionen vid klick på startknappen
startBtn.addEventListener('click', displayName);

// Anropar funktionen vid klick på entertagenten
inputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        displayName();
    }
});

const winLose = document.querySelector('.win-lose');
const win = document.createElement('p');
win.textContent = 'Grattis! Du vann :)';
const lose = document.createElement('p');
lose.textContent = 'Tyvärr,! du förlorade :(';

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber % 2 === 0) {
        winLose.append(win);
    } else {
        winLose.append(lose);
    }
}

// Anropar funktion för att byta vy till game over
testBtn.addEventListener('click', getRandomNumber);


// Anropar funktionen för att byta vy till spelvyn
newGame.addEventListener ('click', changeViewBack);



