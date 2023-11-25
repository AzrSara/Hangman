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
