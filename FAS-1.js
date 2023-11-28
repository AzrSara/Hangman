import {words} from "./svenska-ord.js"
// import {testBtn, gameView, gameOver, newGame, changeView, changeViewBack} from './game-over.js';


//===================//FAS-1 START//==========================================


// NIVÅ HANDERING START

// Hämtar Elements 
const easyBtn = document.querySelector(".easy")
const normalBtn = document.querySelector(".normal")
const hardBtn = document.querySelector(".hard")

//Lista för ord med 15 bokstäver
const elevenToFifteenLetterWords  = []
words.forEach( word => {
    if(word.length >= 11 && word.length <= 15){
        elevenToFifteenLetterWords .push(word)
    }
})

//Lista för ord med 10 bokstäver
const sixToTenLetterWords = []
words.forEach( word => {
    if(word.length >= 6 && word.length <= 10){
        sixToTenLetterWords.push(word)
    }
})

//Lista för ord med 5 bokstäver
const threeToFiveLetterWords = []
words.forEach( word => {
    if(word.length >= 3 && word.length <= 5){
        threeToFiveLetterWords.push(word)
    }
})
// Varibel som tar ord från lvl knappar och allmänt
let wordToUse

// Slumpar ett ord
const getRandomWord = (words) => {
    const index = Math.floor(Math.random() * words.length)
    return words[index]
}
const randomWord = getRandomWord(words)
wordToUse = randomWord
console.log(randomWord);

// Sträcken efter antal bokstäver 
const wordContainer = document.querySelector(".letters")
let guessedLetters = Array(randomWord.length).fill("_ ");
const displayLines = () => {
    wordContainer.innerHTML = '';
    guessedLetters.forEach(letter => {
    wordContainer.innerHTML += `<span class="letters">${letter}</span>`
    })
};

// Egen variabel för svårihetsgrads ord 
let currentWord;
const startGame = (randomWord) => {
    currentWord = randomWord
    wordToUse = currentWord
    console.log("Ordet från lvl knappar:", currentWord);
    guessedLetters = Array(currentWord.length).fill("_ ");
    displayLines()
}

// displayLines(randomWord);

//Easy level
easyBtn.addEventListener('click', () => {
    const randomWord = getRandomWord(elevenToFifteenLetterWords)
    startGame(randomWord)
    
} )

//Medium level
normalBtn.addEventListener('click', () => {
    const randomWord = getRandomWord(sixToTenLetterWords)
    startGame(randomWord)
    
} )

//Hard level
hardBtn.addEventListener('click', () => {
    const randomWord = getRandomWord(threeToFiveLetterWords)
    startGame(randomWord)
    
} )


// NIVÅ HANDERING END

// Tangentbord Knappar
let keyLetters = document.querySelectorAll('.key-letter')
keyLetters.forEach(key => {
    key.addEventListener('click', (event) => {
        
        event.target.classList.add('key-pressed')
    })
})

//===================//FAS-1 END//==========================================
let levelSelected = false 
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
const keyboard = document.querySelector(".keyboard")
startBtn.addEventListener('click', () => {
    displayName()
    keyboard.classList.remove("on")
    wordContainer.classList.remove("on")

});

// Anropar funktionen vid klick på entertagenten
inputElement.addEventListener('keydown', function (event)  {
    if (event.key === 'Enter') {
        displayName();
    }
});

// Börja Spela knaooen är disable innan man fyller namn och trycker på ett av lvl alt

const levelButtons = document.querySelectorAll('.easy, .normal, .hard');
function startBtnStatus() {
    if (inputElement.value.trim() && easyBtn || normalBtn || hardBtn) {
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
    }
}

levelButtons.forEach(button => {
    button.addEventListener('click', function() {
        levelSelected = true;
        startBtnStatus(); 
    });
});

//Knappen Börja Spela är disable innan men har skrivit sitt namn
// inputElement.addEventListener('input', () => {
// const name = this.value.trim()
// if (name.length > 0) {
//     playButton.disabled = false
// } else {
//     playButton.disabled = true
// }
// })

//===================//FAS-2 START//==========================================
let ground = document.querySelector("#ground")
let scaffold = document.querySelector("#scaffold")
let legs = document.querySelector("#legs")
let arms = document.querySelector("#arms")
let body = document.querySelector("#body")
let head = document.querySelector("#head")

let hangman = [ground, scaffold, head, body, arms, legs]

//keyLetters från rad 79; Keyboard blir aktiv nu, data tas från data-char
let charCounter = 1
keyLetters.forEach(key => {
    key.addEventListener('click', () => {
        const char = key.getAttribute('data-char')
        showLetter(char)
        charCounter++
    })
})

//Visar upp rätt gissade bokstäver 

const showLetter = (char) => {
    let found = false
    for (let i = 0; i < wordToUse.length; i++) {
        if (wordToUse[i].toUpperCase() === char) {
            guessedLetters[i] = char
            found = true
        }
    }
    
    if (found){
        displayLines()
    } else {
        misstake(char)
    }
    checkGameStatus()  
}

displayLines()

// Ritar upp gubbens kroppsdelar om gissar fel 
let misstakeCount = 0
const misstake = (char) => {
    let misstakeFound = true;
    for (let i = 0; i < wordToUse.length; i++) {
        if (wordToUse[i].toUpperCase() === char) {
            misstakeFound = false;
            break;
        }
    }

    if (misstakeFound) {
        if (misstakeCount < hangman.length) {
            hangman[misstakeCount].classList.remove("on");
            misstakeCount++;
        }
    }
    checkGameStatus()
};


//===================//FAS-2 END//==========================================
//===================//FAS-3A START//==========================================
const restartBtn = document.querySelector('#restart-btn');
const gameView = document.querySelector('.window');
const gameOver = document.querySelector('#game-over');
const newGame = document.querySelector('.game-view');
const winLose = document.querySelector('.win-lose');
const win = document.createElement('p');
win.textContent = 'Grattis!';
const lose = document.createElement('p');
lose.textContent = 'Tyvärr, du förlorade :(';
const wordWas = document.querySelector('.word-was');
const quantityGuesses = document.querySelector('.quantity-guesses');
const winEmoji = document.querySelector('.win-emoji');
const loseEmoji = document.querySelector('.lose-emoji');
const winningSound = document.querySelector('.win-sound');
const losingSound = document.querySelector('.lose-sound');
const scoreViewBtn = document.querySelector('.results');

const changeView = () => {
    gameView.style.display = 'none';
    gameOver.style.display = 'block';

    winLose.innerText = '';
    winEmoji.style.display = 'none'
    loseEmoji.style.display = 'none'
    
    const slumpatOrd = wordToUse
    wordWas.textContent = 'Ordet var: ' + slumpatOrd;
}

const checkGameStatus = () => {
    
    if (guessedLetters.join('').toUpperCase() === wordToUse.toUpperCase()) {
        changeView()
        winLose.append(win);
        winEmoji.style.display = 'block'
        winningSound.play();
        quantityGuesses.innerText = `Antal gissningar:${charCounter}`
        
    } else if(misstakeCount === hangman.length ){
        changeView()
        winLose.append(lose);
        loseEmoji.style.display = 'block'
        losingSound.play()
        quantityGuesses.innerText = `Antal gissningar:${charCounter}`
    }

}
//Se antal gissningar



// Starta nytt spel knappen 
function changeViewBack() {

    gameOver.style.display = 'none'
    gameView.style.display = 'block'
    location.reload()

}
newGame.addEventListener ('click', changeViewBack);

//Starta om Knappen
restartBtn.addEventListener('click', () => {
    location.reload()
})

// POÄNGVY KNAPPEN
function changeViewScore() {

    gameOver.style.display = 'none'
    score.style.display = 'block'
    

}
scoreViewBtn.addEventListener ('click', changeViewScore);

//===================//FAS-3AEND//=============================
//===================//PoängVY START//===============================
document.addEventListener('DOMContentLoaded', function () {
    // Existerande kod
    const scoreView = document.querySelector('#score-view');
    const button1 = document.querySelector('.window');
    const score = document.querySelector('#score');
    const newGame = document.querySelector('.game-view');
    const newGameButton = document.querySelector('.button1');
  
    // Skapar en funktion där spelvyn tas bort och score vyn tas fram när man klickar på en knapp
    function changeView() {
        button1.style.display = 'none';
        score.style.display = 'block';
    }
  
    // Anropar funktionen när #score-view klickas
    scoreView.addEventListener('click', changeView);
  
    // Skapar en funktion där score vyn tas bort och spelvyn vyn tas fram när man klickar på en knapp
    function changeViewBack() {
        score.style.display = 'none';
        button1.style.display = 'block';
    }
  
    // Anropar funktionen när .game-view klickas
    newGame.addEventListener('click', changeViewBack);
  
    // Skapar en funktion där poängvyn tas bort och spelvyn tas fram när man klickar på "Starta nytt spel" i poängvyn
    function startNewGame() {
        score.style.display = 'none';
        button1.style.display = 'block';
    }
  
    // Anropar funktionen när .button1 klickas
    newGameButton.addEventListener('click', startNewGame);
  });
//===================//PoängVY END//===============================

//====================START-GAME===================================

 // Function för att visa score resultat i localStorage "påbörjad"
 function displayScoreView() {
    const games = JSON.parse(localStorage.getItem('hangmanGames')) || [];
    const tableBody = document.querySelector('#scoreTable tbody');

    
    games.sort((a, b) => {
        
        return a.incorrectGuesses - b.incorrectGuesses || new Date(b.dateTime) - new Date(a.dateTime);
    });

    
    tableBody.innerHTML = '';

    
    games.forEach(game => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = game.playerName;
        row.insertCell(1).textContent = game.incorrectGuesses;
        row.insertCell(2).textContent = game.wordLength;
        row.insertCell(3).textContent = game.dateTime;
        row.insertCell(4).textContent = game.outcome === 'win' ? 'Vinst' : 'Förlust';
    });
}


displayScoreView();



