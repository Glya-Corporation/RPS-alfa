// Función para mostrar una frase en pantalla
const showPhrase = phrases => {
  // Aquí puedes implementar la lógica para mostrar una frase aleatoria
  // que cumpla con el criterio de repetición espaciada.
  // Puedes usar Math.random() para obtener un índice aleatorio del array.
  const index = Math.floor(Math.random() * phrases.length);
  const currentePhrase = phrases[index];
  console.log(currentePhrase.text);
}

// Función para actualizar el nivel de conocimiento de una frase
const updateKnown = (index, known, phrases) => {
  const phrase = phrases[index];
  phrase.known = known;
  if (known) {
    // Si la frase se conoce, se incrementa el intervalo para repetirla con menos frecuencia
    phrase.interval *= 2;
  } else {
    // Si la frase no se conoce, se reinicia el intervalo para repetirla más seguido
    phrase.interval = 1;
  }
}

// Función para planificar la próxima repetición de una frase conocida
const nextRepeat = index => {
  const phrase = phrases[index];
  setTimeout(() => showPhrase(), phrase.interval * 1000); // La repetición se hará después de "intervalo" segundos
}

// Función para registrar el conocimiento de una frase y planificar su próxima repetición
const recordKnownAndScheduleRepetition = (indice, conocida) => {
  showPhrase(index, known);
  nextRepeat(index);
}

// Uso de la app:

// Mostrar una frase por primera vez
showPhrase();

// Supongamos que el usuario indicó si conoce o no la frase
const indexPhrase = 0; // Índice de la frase que se mostró en pantalla
const userKnowPhrase = true; // Por ejemplo, el usuario indicó que conoce la frase
recordKnownAndScheduleRepetition(indexPhrase, userKnowPhrase);