import {words} from "./svenska-ord.js"



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
    const randomWord = getRandomWord(elevenToFifteenLetterWords)
    displayLines(randomWord)
} )

//Medium level
normalBtn.addEventListener('click', () => {
    const randomWord = getRandomWord(sixToTenLetterWords)
    displayLines(randomWord)
} )

//Hard level
hardBtn.addEventListener('click', () => {
    const randomWord = getRandomWord(threeToFiveLetterWords)
    displayLines(randomWord)
} )


// NIVÅ HANDERING END

// Tangentbord Knappar
document.querySelectorAll('.key-letter').forEach(key => {
    key.addEventListener('click', (event) => {
        
        event.target.classList.toggle('key-pressed')
    })
})

