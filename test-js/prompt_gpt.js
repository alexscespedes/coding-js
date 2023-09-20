function preguntarSuma() {
  // Preguntar al usuario
  var respuesta = prompt("¿Cuánto es 2 + 2?");

  // Convertir la respuesta a número
  var respuestaNumero = parseInt(respuesta);

  // Comprobar si la respuesta es correcta
  if (respuestaNumero === 4) {
    // Respuesta correcta, mostrar mensaje de felicitaciones
    alert("¡Correcto! ¡Felicitaciones!");
  } else {
    // Respuesta incorrecta, volver a preguntar
    alert("Respuesta incorrecta. Intenta de nuevo.");
    preguntarSuma(); // Llamada recursiva para volver a preguntar
  }
}

// Iniciar el juego
preguntarSuma();
