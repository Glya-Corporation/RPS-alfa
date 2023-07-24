// Función para mostrar una frase en pantalla
const showPhrase = phrases => {
  // Aquí puedes implementar la lógica para mostrar una frase aleatoria
  // que cumpla con el criterio de repetición espaciada.
  // Puedes usar Math.random() para obtener un índice aleatorio del array.
  const index = Math.floor(Math.random() * phrases.length);
  const currentePhrase = phrases[index];
  return currentePhrase;
};

export default showPhrase;