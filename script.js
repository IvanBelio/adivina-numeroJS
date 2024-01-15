// COnfigurar la aplicación
const mensajeInicial = 'Empieza a adivinar...'
let score = 20
let highScore = 0
const secretNumber = Math.trunc(Math.random() * 20) + 1

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
    document.body.style.backgroundColor = '#60b347'
    checkButton.disabled = true
    // Mostrar el mensaje
    messageField.textContent = 'Has acertado'
    // Mostrar el número secreo
    secretNumberField.textContent = secretNumber
    document.number.style.backgroundColor = '#F00'

    // Actualizar el highScore
    if (score > highScore) {
      highScore = score
      highScoreField.textContent = highScore
    }
  }
  // Compararlo con el secretNumber
})