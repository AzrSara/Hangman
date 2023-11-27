//   SKAPAR FUNKTION FÖR ATT SPARA RESULTAT
function saveScore() {
    const scoreList = JSON.parse(localStorage.getItem('hangmanScores')) || [];

    const scoreObj = {
        playerName: inputElement.value, // Spelarens namn
        wrongGuesses: charCounter, // Antal felaktiga gissningar
        wordLength: wordToUse.length, // Ordets längd
        date: new Date().toLocaleString(), // Datum och tid för omgången
        outcome: misstakeCount === hangman.length ? 'Förlust' : 'Vinst', // Resultat (vinst/förlust)
    };

      // Lägg till det nya poängobjektet i listan
      scoreList.push(scoreObj);

      // Spara den uppdaterade poänglistan i localStorage
      localStorage.setItem('hangmanScores', JSON.stringify(scoreList));
}

// Skapa en funktion för att visa poängen på skärmen
function displayScores() {
    // Hämta poänglistan från localStorage
    const scoreList = JSON.parse(localStorage.getItem('hangmanScores')) || [];

    // Skapa HTML för att visa poängen
    const scoreHTML = scoreList.map(score => `
        <div class="score-item">
            <p>${score.playerName}</p>
            <p>Antal gissningar: ${score.wrongGuesses}</p>
            <p>Ordets längd: ${score.wordLength}</p>
            <p>Datum & Tid: ${score.date}</p>
            <p>Resultat: ${score.outcome}</p>
        </div>
    `).join('');

    // Visa HTML på önskad plats i din webbsida
    document.querySelector('.display-score').innerHTML = scoreHTML;
}

// Anropa displayScores-funktionen när du vill visa poängen på skärmen
displayScores();
