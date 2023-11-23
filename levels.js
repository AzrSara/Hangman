import {words} from "./svenska-ord.js"

// Hämtar Elements 
const easyBtn = document.querySelector(".easy")
const normalBtn = document.querySelector(".normal")
const hardBtn = document.querySelector(".hard")

//Lista för ord med 15 bokstäver
const fiveteenLetterWords = []
words.forEach( word => {
    if(word.length === 15){
        fiveteenLetterWords.push(word)
    }
})

//Lista för ord med 10 bokstäver
const tenLetterWords = []
words.forEach( word => {
    if(word.length === 10){
        tenLetterWords.push(word)
    }
})

//Lista för ord med 5 bokstäver
const fiveLetterWords = []
words.forEach( word => {
    if(word.length === 5){
        fiveLetterWords.push(word)
    }
})

// Slumpar ett ord
const getRandomWord = (words) => {
    const index = Math.floor(Math.random() * words.length)
    return words[index]
}
const randomWord = getRandomWord(words)

// Sträcken efter antal bokstäver 
const wordContainer = document.querySelector(".letters")
const displayLines = (word) => {
    wordContainer.innerHTML = '';
    for (let i = 0; i < word.length; i++) {
        wordContainer.innerHTML += '<span class="letter">_ </span>';
    }
};

displayLines(randomWord);

//Easy level
easyBtn.addEventListener('click', () => {
    const randomWord = getRandomWord(fiveteenLetterWords)
    displayLines(randomWord)
} )

//Medium level
normalBtn.addEventListener('click', () => {
    const randomWord = getRandomWord(tenLetterWords)
    displayLines(randomWord)
} )

//Hard level
hardBtn.addEventListener('click', () => {
    const randomWord = getRandomWord(fiveLetterWords)
    displayLines(randomWord)
} )
