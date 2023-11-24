// Selecting elements from the HTML
const testButton = document.querySelector('#test-button');
const playAgainButton = document.querySelector('.knapp');
const scoreViewButton = document.querySelector('.resultat');
const gameView = document.getElementById('game');
const scoreView = document.getElementById('vy');

// Function to show the score view and hide the game view
function showScoreView() {
    scoreView.style.display = 'block';
    gameView.style.display = 'none';
}

// Function to show the game view and hide the score view
function showGameView() {
    scoreView.style.display = 'none';
    gameView.style.display = 'block';
}

// Adding click event listeners to the buttons
testButton.addEventListener('click', showScoreView);
playAgainButton.addEventListener('click', showGameView);
scoreViewButton.addEventListener('click', showScoreView);
