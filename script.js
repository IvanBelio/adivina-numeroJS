// COnfigurar la aplicación
const mensajeInicial = 'Empieza a adivinar...'
const SCORE = 20

// Variables de la aplicación
let score
let highScore = 0
let secretNumber

// Seleccionar elementos del DOM
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

// Inicializar la aplicación
initApp()

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
    secretNumberField.style.backgroundColor = 'yellow'
    secretNumberField.style.width = '300px'

    // Actualizar el highScore
    if (score > highScore) {
      highScore = score
      highScoreField.textContent = highScore
    }
  }
  // Compararlo con el secretNumber
})

function initApp() {
  // Inicializamos score
  score = SCORE
  scoreField.textContent = score
  // TODO: Inicializamos highScore

  // Inicializar el texto de inicio
  messageField.textContent = mensajeInicial

  // Inicializar el numero secreto y ocultarlo
  secretNumber = Math.trunc(Math.random() * 20) + 1
  secretNumberField.textContent = '?'

  // Inicializar el fondo de patalla
  document.body.style.backgroundColor = '#222'
  secretNumberField.style.width = '150px'
  secretNumberField.style.backgroundColor = '#fff'

  // Inicializamos el checkButton
  checkButton.disabled = false
}

againButton.addEventListener('click', initApp)
