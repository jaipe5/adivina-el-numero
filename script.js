// Generar un número aleatorio entre 1 y 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Selección de elementos del DOM
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const messageDiv = document.getElementById('message');
const attemptsDiv = document.getElementById('attempts');

// Función para verificar la adivinanza
function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        messageDiv.textContent = `🎉 ¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
        messageDiv.style.color = 'green';
        guessBtn.disabled = true; // Deshabilitar el botón después de ganar
    } else if (userGuess < randomNumber) {
        messageDiv.textContent = '📉 Intenta con un número más alto.';
        messageDiv.style.color = 'orange';
    } else if (userGuess > randomNumber) {
        messageDiv.textContent = '📈 Intenta con un número más bajo.';
        messageDiv.style.color = 'orange';
    }

    attemptsDiv.textContent = `Intentos: ${attempts}`;
    guessInput.value = ''; // Limpiar el input
}

// Evento de clic en el botón "Guess"
guessBtn.addEventListener('click', checkGuess);
