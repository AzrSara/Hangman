import {words} from "./svenska-ord.js"


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
    console.log("Загаданное слово:", currentWord);
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

//===================//FAS-2 START//==========================================
let ground = document.querySelector("#ground")
let scaffold = document.querySelector("#scaffold")
let legs = document.querySelector("#legs")
let arms = document.querySelector("#arms")
let body = document.querySelector("#body")
let head = document.querySelector("#head")

let hangman = [scaffold, legs, arms, body, head ]

//keyLetters från rad 79; Keyboard blir aktiv nu, data tas från data-char
keyLetters.forEach(key => {
    key.addEventListener('click', () => {
        const char = key.getAttribute('data-char')
        showLetter(char)
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
};


//===================//FAS-2 END//==========================================


