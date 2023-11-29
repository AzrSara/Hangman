document.addEventListener('DOMContentLoaded', function () {
    
    const levelButtons = document.querySelectorAll('.levels button');
    const gameStarterButton = document.querySelector('.game-starter');
    const overlay = document.querySelector('.overlay');
    const nameInput = document.querySelector('.name-input');
    const errorMessage = document.querySelector('.error-message'); 

    
    levelButtons.forEach(button => {
        button.addEventListener('click', function () {
           
            gameStarterButton.removeAttribute('disabled');

         
            levelButtons.forEach(btn => btn.classList.remove('selected'));

            
            button.classList.add('selected');

            
            nameInput.classList.remove('invalid');
            errorMessage.style.display = 'none';
        });
    });

    // Function to start the game and hide the overlay
    function startGame() {
        // Check if a name is entered before starting the game
        if (nameInput.value.trim() !== '') {
            // Add your game start logic here

            // Hide the overlay
            overlay.style.display = 'none';
        } else {
            // Add the 'invalid' class to the name input
            nameInput.classList.add('invalid');

            // Display the error message
            errorMessage.style.display = 'block';
        }
    }

    // Add an event listener to the "Börja spela" button
    gameStarterButton.addEventListener('click', startGame);
});










