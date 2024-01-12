// COnfigurar la aplicación
const mensajeInicial = 'Empieza a adivinar...'
let score = 21
let highScore = 1
const secretNumber = Math.trunc(Math.random() * 20 + 1)

// Seleccionar elementos del DOM
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

// Inicializar la aplicación
messageField.textContent = mensajeInicial
scoreField.textContent = score
highScoreField.textContent = highScore
secretNumberField.textContent = secretNumber

// Funcionalidad de la aplicación
// ddEventListener Es una función que recibe como argumento otra función.
checkButton.addEventListener('click', () => {
    // Obtener el valor del input
    const guestNumber = Number(guessNumberField.value)
    if (guestNumber > secretNumber) {
        // Actualizar el mensaje
        // Actualizar el score
        score--
        scoreField.textContent = score
        messageField.textContent = 'Te has pasado'
    } else if (guestNumber < secretNumber) {
        // Actualizar el mensaje
        // Actualizar el score
        score--
        scoreField.textContent = score
        messageField.textContent = 'Te has quedado corto'
    } else {
        // Ha ganado...
        // Cambiar fondo de pantalla
        // Mostrar el número secreo
        // Actualizar el highScore
    }
    // Compararlo con el secretNumber
})