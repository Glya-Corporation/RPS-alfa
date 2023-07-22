const frases = [
  {
    "conocida": false,
    "texto": "The sun is shining.",
    "intervalo": 1,
    "traduccion": "El sol está brillando."
  },
  {
    "conocida": false,
    "texto": "I love learning new things.",
    "intervalo": 1,
    "traduccion": "Me encanta aprender cosas nuevas."
  },
  {
    "conocida": false,
    "texto": "Life is full of surprises.",
    "intervalo": 1,
    "traduccion": "La vida está llena de sorpresas."
  },
  {
    "conocida": false,
    "texto": "Time flies when you're having fun.",
    "intervalo": 1,
    "traduccion": "El tiempo vuela cuando te estás divirtiendo."
  },
  {
    "conocida": false,
    "texto": "The world is a book, and those who do not travel read only one page.",
    "intervalo": 1,
    "traduccion": "El mundo es un libro y aquellos que no viajan solo leen una página."
  },
  {
    "conocida": false,
    "texto": "Every moment is a fresh beginning.",
    "intervalo": 1,
    "traduccion": "Cada momento es un nuevo comienzo."
  },
  {
    "conocida": false,
    "texto": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "intervalo": 1,
    "traduccion": "El éxito no es definitivo, el fracaso no es fatal: Lo que cuenta es el coraje para seguir adelante."
  },
  {
    "conocida": false,
    "texto": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "intervalo": 1,
    "traduccion": "La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir adelante."
  },
  {
    "conocida": false,
    "texto": "The only limit to our realization of tomorrow will be our doubts of today.",
    "intervalo": 1,
    "traduccion": "El único límite para nuestra realización de mañana serán nuestras dudas de hoy."
  },
  {
    "conocida": false,
    "texto": "You are never too old to set another goal or to dream a new dream.",
    "intervalo": 1,
    "traduccion": "Nunca eres demasiado mayor para establecer otra meta o soñar un nuevo sueño."
  },
  {
    "conocida": false,
    "texto": "The only way to do great work is to love what you do.",
    "intervalo": 1,
    "traduccion": "La única forma de hacer un gran trabajo es amar lo que haces."
  },
  {
    "conocida": false,
    "texto": "Happiness is not something readymade. It comes from your own actions.",
    "intervalo": 1,
    "traduccion": "La felicidad no es algo prefabricado. Viene de tus propias acciones."
  },
  {
    "conocida": false,
    "texto": "Believe you can and you're halfway there.",
    "intervalo": 1,
    "traduccion": "Cree que puedes y ya estás a mitad de camino."
  },
  {
    "conocida": false,
    "texto": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "intervalo": 1,
    "traduccion": "Al final, recordaremos no las palabras de nuestros enemigos, sino el silencio de nuestros amigos."
  },
  {
    "conocida": false,
    "texto": "The only way to have a friend is to be one.",
    "intervalo": 1,
    "traduccion": "La única forma de tener un amigo es siendo uno."
  },
  {
    "conocida": false,
    "texto": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "intervalo": 1,
    "traduccion": "Las mejores y más bellas cosas del mundo no pueden verse o tocarse, deben sentirse con el corazón."
  },
  {
    "conocida": false,
    "texto": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "intervalo": 1,
    "traduccion": "No vayas por donde pueda llevar el camino, ve en cambio donde no haya camino y deja un rastro."
  },
  {
    "conocida": false,
    "texto": "It always seems impossible until it is done.",
    "intervalo": 1,
    "traduccion": "Siempre parece imposible hasta que se hace."
  },
  {
    "conocida": false,
    "texto": "The only person you are destined to become is the person you decide to be.",
    "intervalo": 1,
    "traduccion": "La única persona que estás destinado a ser es la persona que decides ser."
  },
  {
    "conocida": false,
    "texto": "Life is not about finding yourself. Life is about creating yourself.",
    "intervalo": 1,
    "traduccion": "La vida no se trata de encontrarte a ti mismo. La vida se trata de crearte a ti mismo."
  },
  {
    "conocida": false,
    "texto": "Don't watch the clock; do what it does. Keep going.",
    "intervalo": 1,
    "traduccion": "No mires el reloj; haz lo que hace. Sigue adelante."
  },
  {
    "conocida": false,
    "texto": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "intervalo": 1,
    "traduccion": "Lo que está detrás de nosotros y lo que está delante de nosotros son asuntos insignificantes en comparación con lo que hay dentro de nosotros."
  },
  {
    "conocida": false,
    "texto": "You miss 100% of the shots you don't take.",
    "intervalo": 1,
    "traduccion": "Fallas el 100% de los tiros que no tomas."
  },
  {
        "conocida": false,
    "texto": "It does not matter how slowly you go as long as you do not stop.",
    "intervalo": 1,
    "traduccion": "No importa lo despacio que vayas mientras no te detengas."
  },
  {
    "conocida": false,
    "texto": "Success usually comes to those who are too busy to be looking for it.",
    "intervalo": 1,
    "traduccion": "El éxito generalmente llega a aquellos que están demasiado ocupados como para buscarlo."
  },
  {
    "conocida": false,
    "texto": "The only person who is educated is the one who has learned how to learn and change.",
    "intervalo": 1,
    "traduccion": "La única persona que está educada es aquella que ha aprendido a aprender y cambiar."
  },
  {
    "conocida": false,
    "texto": "Opportunities don't happen. You create them.",
    "intervalo": 1,
    "traduccion": "Las oportunidades no suceden. Tú las creas."
  },
  {
    "conocida": false,
    "texto": "You are what you believe yourself to be.",
    "intervalo": 1,
    "traduccion": "Eres lo que crees que eres."
  },
  {
    "conocida": false,
    "texto": "In the middle of every difficulty lies opportunity.",
    "intervalo": 1,
    "traduccion": "En medio de cada dificultad yace una oportunidad."
  },
  {
    "conocida": false,
    "texto": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "intervalo": 1,
    "traduccion": "Cree en ti mismo y en todo lo que eres. Sabe que hay algo dentro de ti que es más grande que cualquier obstáculo."
  },
  {
    "conocida": false,
    "texto": "The best way to predict the future is to create it.",
    "intervalo": 1,
    "traduccion": "La mejor manera de predecir el futuro es crearlo."
  },
  {
    "conocida": false,
    "texto": "It's not the years in your life that count, it's the life in your years.",
    "intervalo": 1,
    "traduccion": "No son los años de tu vida lo que cuenta, es la vida en tus años."
  },
  {
    "conocida": false,
    "texto": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "intervalo": 1,
    "traduccion": "Dentro de ti tienes en este momento todo lo que necesitas para lidiar con lo que el mundo te presente."
  },
  {
    "conocida": false,
    "texto": "I would rather die of passion than of boredom.",
    "intervalo": 1,
    "traduccion": "Preferiría morir de pasión que de aburrimiento."
  },
  {
    "conocida": false,
    "texto": "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "intervalo": 1,
    "traduccion": "No puedo cambiar la dirección del viento, pero puedo ajustar mis velas para siempre llegar a mi destino."
  },
  {
    "conocida": false,
    "texto": "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "intervalo": 1,
    "traduccion": "El éxito es tropezar de fracaso en fracaso sin perder el entusiasmo."
  },
  {
    "conocida": false,
    "texto": "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
    "intervalo": 1,
    "traduccion": "Si realmente quieres hacer algo, encontrarás una manera. Si no, encontrarás una excusa."
  },
  {
    "conocida": false,
    "texto": "Your time is limited, don't waste it living someone else's life.",
    "intervalo": 1,
    "traduccion": "Tu tiempo es limitado, no lo desperdicies viviendo la vida de otra persona."
  },
  {
    "conocida": false,
    "texto": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    "intervalo": 1,
    "traduccion": "Lo único que se interpone entre tú y tu objetivo es la historia que sigues contándote sobre por qué no puedes lograrlo."
  },
  {
    "conocida": false,
    "texto": "What you do speaks so loudly that I cannot hear what you say.",
    "intervalo": 1,
    "traduccion": "Lo que haces habla tan fuerte que no puedo escuchar lo que dices."
  },
  {
    "conocida": false,
    "texto": "You can't cross the sea merely by standing and staring at the water.",
    "intervalo": 1,
    "traduccion": "No puedes cruzar el mar simplemente parado y mirando el agua."
  },
  {
    "conocida": false,
    "texto": "Don't let yesterday take up too much of today.",
    "intervalo": 1,
    "traduccion": "No permitas que ayer ocupe demasiado de hoy."
  },
  {
    "conocida": false,
    "texto": "The only limit to our realization of tomorrow will be our doubts of today.",
    "intervalo": 1,
    "traduccion": "El único límite para nuestra realización de mañana serán nuestras dudas de hoy."
  },
  {
    "conocida": false,
    "texto": "The best time to plant a tree was 20 years ago. The second best time is now.",
    "intervalo": 1,
    "traduccion": "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora."
  },
  {
    "conocida": false,
    "texto": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "intervalo": 1,
    "traduccion": "No te dejes empujar por los miedos en tu mente. Déjate guiar por los sueños en tu corazón."
  },
  {
       "conocida": false,
    "texto": "The secret to getting ahead is getting started.",
    "intervalo": 1,
    "traduccion": "El secreto para avanzar es comenzar."
  },
  {
    "conocida": false,
    "texto": "Life is 10% what happens to you and 90% how you react to it.",
    "intervalo": 1,
    "traduccion": "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello."
  },
  {
    "conocida": false,
    "texto": "You are never too old to set another goal or to dream a new dream.",
    "intervalo": 1,
    "traduccion": "Nunca eres demasiado mayor para establecer otra meta o soñar un nuevo sueño."
  },
  {
    "conocida": false,
    "texto": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "intervalo": 1,
    "traduccion": "Lo que obtienes al alcanzar tus metas no es tan importante como lo que te conviertes al alcanzar tus metas."
  },
  {
    "conocida": false,
    "texto": "The best revenge is massive success.",
    "intervalo": 1,
    "traduccion": "La mejor venganza es un éxito masivo."
  },
  {
    "conocida": false,
    "texto": "The only limit to our realization of tomorrow will be our doubts of today.",
    "intervalo": 1,
    "traduccion": "El único límite para nuestra realización de mañana serán nuestras dudas de hoy."
  },
  {
    "conocida": false,
    "texto": "Believe you can and you're halfway there.",
    "intervalo": 1,
    "traduccion": "Cree que puedes y ya estás a mitad de camino."
  },
  {
    "conocida": false,
    "texto": "You miss 100% of the shots you don't take.",
    "intervalo": 1,
    "traduccion": "Fallas el 100% de los tiros que no tomas."
  },
  {
    "conocida": false,
    "texto": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    "intervalo": 1,
    "traduccion": "Tu trabajo va a ocupar una gran parte de tu vida, y la única forma de estar realmente satisfecho es hacer lo que crees que es un gran trabajo. Y la única forma de hacer un gran trabajo es amar lo que haces."
  },
  {
    "conocida": false,
    "texto": "The only way to do great work is to love what you do.",
    "intervalo": 1,
    "traduccion": "La única forma de hacer un gran trabajo es amar lo que haces."
  },
  {
    "conocida": false,
    "texto": "The only person you are destined to become is the person you decide to be.",
    "intervalo": 1,
    "traduccion": "La única persona que estás destinado a ser es la persona que decides ser."
  },
  {
    "conocida": false,
    "texto": "You can't use up creativity. The more you use, the more you have.",
    "intervalo": 1,
    "traduccion": "No puedes agotar la creatividad. Cuanto más la usas, más tienes."
  },
  {
    "conocida": false,
    "texto": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    "intervalo": 1,
    "traduccion": "Dentro de veinte años estarás más decepcionado por las cosas que no hiciste que por las que hiciste."
  },
  {
        "conocida": false,
    "texto": "The secret to getting ahead is getting started.",
    "intervalo": 1,
    "traduccion": "El secreto para avanzar es comenzar."
  },
  {
    "conocida": false,
    "texto": "Your life does not get better by chance, it gets better by change.",
    "intervalo": 1,
    "traduccion": "Tu vida no mejora por casualidad, mejora por el cambio."
  },
  {
    "conocida": false,
    "texto": "The man who has confidence in himself gains the confidence of others.",
    "intervalo": 1,
    "traduccion": "El hombre que tiene confianza en sí mismo obtiene la confianza de los demás."
  },
  {
    "conocida": false,
    "texto": "You don't have to be great to start, but you have to start to be great.",
    "intervalo": 1,
    "traduccion": "No tienes que ser grandioso para comenzar, pero debes comenzar para ser grandioso."
  },
  {
    "conocida": false,
    "texto": "If you don't like something, change it. If you can't change it, change your attitude.",
    "intervalo": 1,
    "traduccion": "Si no te gusta algo, cámbialo. Si no puedes cambiarlo, cambia tu actitud."
  },
  {
    "conocida": false,
    "texto": "Life is not about waiting for the storm to pass, it's about learning how to dance in the rain.",
    "intervalo": 1,
    "traduccion": "La vida no se trata de esperar a que pase la tormenta, sino de aprender a bailar bajo la lluvia."
  },
  {
    "conocida": false,
    "texto": "You are never too old to set another goal or to dream a new dream.",
    "intervalo": 1,
    "traduccion": "Nunca eres demasiado mayor para establecer otra meta o soñar un nuevo sueño."
  },
  {
    "conocida": false,
    "texto": "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
    "intervalo": 1,
    "traduccion": "Los desafíos son lo que hacen interesante la vida. Superarlos es lo que da sentido a la vida."
  },
  {
    "conocida": false,
    "texto": "Success is not the key to happiness. Happiness is the key to success.",
    "intervalo": 1,
    "traduccion": "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito."
  },
  {
    "conocida": false,
    "texto": "The only way to do great work is to love what you do.",
    "intervalo": 1,
    "traduccion": "La única forma de hacer un gran trabajo es amar lo que haces."
  },
  {
    "conocida": false,
    "texto": "Don't be afraid to give up the good to go for the great.",
    "intervalo": 1,
    "traduccion": "No temas renunciar a lo bueno para ir por lo grandioso."
  },
  {
    "conocida": false,
    "texto": "Success usually comes to those who are too busy to be looking for it.",
    "intervalo": 1,
    "traduccion": "El éxito generalmente llega a aquellos que están demasiado ocupados como para buscarlo."
  },
  {
    "conocida": false,
    "texto": "The future belongs to those who believe in the beauty of their dreams.",
    "intervalo": 1,
    "traduccion": "El futuro pertenece a aquellos que creen en la belleza de sus sueños."
  },
  {
    "conocida": false,
    "texto": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "intervalo": 1,
    "traduccion": "Cree en ti mismo y en todo lo que eres. Sabe que hay algo dentro de ti que es más grande que cualquier obstáculo."
  },
  {
    "conocida": false,
    "texto": "The only way to have a friend is to be one.",
    "intervalo": 1,
    "traduccion": "La única forma de tener un amigo es siendo uno."
  },
  {
    "conocida": false,
    "texto": "It always seems impossible until it is done.",
    "intervalo": 1,
    "traduccion": "Siempre parece imposible hasta que se hace."
  },
  {
    "conocida": false,
    "texto": "Happiness is not something readymade. It comes from your own actions.",
    "intervalo": 1,
    "traduccion": "La felicidad no es algo prefabricado. Viene de tus propias acciones."
  },
  {
    "conocida": false,
    "texto": "Believe you can and you're halfway there.",
    "intervalo": 1,
    "traduccion": "Cree que puedes y ya estás a mitad de camino."
  },
  {
    "conocida": false,
    "texto": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "intervalo": 1,
    "traduccion": "Al final, recordaremos no las palabras de nuestros enemigos, sino el silencio de nuestros amigos."
  },
  {
    "conocida": false,
    "texto": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "intervalo": 1,
    "traduccion": "Las mejores y más bellas cosas del mundo no pueden verse o tocarse, deben sentirse con el corazón."
  },
  {
    id: 1,
    texto: "How are you?",
    traduccion: "¿Cómo estás?"
  },
  {
    id: 2,
    texto: "What’s up?",
    traduccion: "¿Qué tal?"
  },
  {
    id: 3,
    texto: "I’m fine, thanks.",
    traduccion: "Estoy bien, gracias."
  },
  {
    id: 4,
    texto: "Not bad.",
    traduccion: "No está mal."
  },
  {
    id: 5,
    texto: "What’s new?",
    traduccion: "¿Qué hay de nuevo?"
  },
  {
    id: 6,
    texto: "Long time no see.",
    traduccion: "Cuánto tiempo sin verte."
  },
  {
    id: 7,
    texto: "I missed you.",
    traduccion: "Te he echado de menos."
  },
  {
    id: 8,
    texto: "It’s been a while.",
    traduccion: "Ha pasado un tiempo."
  },
  {
    id: 9,
    texto: "How’s your day?",
    traduccion: "¿Cómo ha ido tu día?"
  },
  {
    id: 10,
    texto: "Good luck!",
    traduccion: "¡Buena suerte!"
  },
  {
    id: 11,
    texto: "Have a good day!",
    traduccion: "¡Que tengas un buen día!"
  },
  {
    id: 12,
    texto: "Take care!",
    traduccion: "¡Cuídate!"
  },
  {
    id: 13,
    texto: "See you later!",
    traduccion: "¡Hasta luego!"
  },
  {
    id: 14,
    texto: "Goodbye!",
    traduccion: "¡Adiós!"
  },
  {
    id: 15,
    texto: "Nice to meet you!",
    traduccion: "¡Encantado de conocerte!"
  },
  {
    id: 16,
    texto: "How old are you?",
    traduccion: "¿Cuántos años tienes?"
  },
  {
    id: 17,
    texto: "Where are you from?",
    traduccion: "¿De dónde eres?"
  },
  {
    id: 18,
    texto: "What do you do?",
    traduccion: "¿A qué te dedicas?"
  },
  {
    id: 19,
    texto: "What are your hobbies?",
    traduccion: "¿Cuáles son tus hobbies?"
  },
  {
    id: 20,
    texto: "What’s your favorite food?",
    traduccion: "¿Cuál es tu comida favorita?"
  },
  {
    id: 21,
    texto: "What’s your favorite color?",
    traduccion: "¿Cuál es tu color favorito?"
  },
  {
    id: 22,
    texto: "What’s your favorite movie?",
    traduccion: "¿Cuál es tu película favorita?"
  },
  {
    id: 23,
    texto: "What’s your favorite song?",
    traduccion: "¿Cuál es tu canción favorita?"
  },
  {
    id: 24,
    texto: "What’s your favorite book?",
    traduccion: "¿Cuál es tu libro favorito?"
  },
  {
    id: 25,
    texto: "Do you have any pets?",
    traduccion: "¿Tienes mascotas?"
  },
  {
    id: 26,
    texto: "Do you like animals?",
    traduccion: "¿Te gustan los animales?"
  },
  {
    id: 27,
    texto: "Do you like sports?",
    traduccion: "¿Te gustan los deportes?"
  },
  {
    id: 28,
    texto: "Do you like music?",
    traduccion: "¿Te gusta la música?"
  },
  {
    id: 29,
    texto: "Do you like movies?",
    traduccion: "¿Te gustan las películas?"
  },
  {
    id: 30,
    texto: "Do you like reading books?",
    traduccion: "¿Te gusta leer libros?"
  },
  {
    id: 31,
    texto: "Do you like traveling?",
    traduccion: "¿Te gusta viajar?"
  },
  {
    id: 32,
    texto: "Do you like cooking?",
    traduccion: "¿Te gusta cocinar?"
  },
  {
    id: 33,
    texto: "Do you like dancing?",
    traduccion: "¿Te gusta bailar?"
  },
  {
    id: 34,
    texto: "Do you like swimming?",
    traduccion: "¿Te gusta nadar?"
  },
  {
    id: 35,
    texto: "Do you like hiking?",
    traduccion: "¿Te gusta hacer senderismo?"
  },
  {
    id: 36,
    texto: "Do you like camping?",
    traduccion: "¿Te gusta acampar?"
  },
  {
    id: 37,
    texto: "Do you like shopping?",
    traduccion: "¿Te gusta ir de compras?"
  },
  {
    id: 38,
    texto: "Do you like going to the beach?",
    traduccion: "¿Te gusta ir a la playa?"
  },
  {
    id: 39,
    texto: "Do you like going to the mountains?",
    traduccion: "¿Te gusta ir a la montaña?"
  },
  {
    id: 40,
    texto: "Do you like going to the park?",
    traduccion: "¿Te gusta ir al parque?"
  },
  {
    id: 41,
    texto: "Do you like going to the gym?",
    traduccion: "¿Te gusta ir al gimnasio?"
  },
  {
    id: 42,
    texto: "Do you like going to the cinema?",
    traduccion: "¿Te gusta ir al cine?"
  },
  {
    id: 43,
    texto: "Do you like going to the theater?",
    traduccion: "¿Te gusta ir al teatro?"
  },
  {
    id: 44,
    texto: "Do you like going to concerts?",
    traduccion: "¿Te gusta ir a conciertos?"
  }
];
  
const deleteRepe = arr => {
  
  const frasesNoRepetidas = [];
  let id = 1
  
  arr.forEach(frase => {
    const index = frasesNoRepetidas.find(element => element.texto === frase.texto);
    if(!index) {
      delete frase.id;
      frasesNoRepetidas.push({id, ...frase, conocida: false, intervalo: 1});
      id++
    }
  });

  return frasesNoRepetidas;
}


const container = document.querySelector("p")

const imprimir = obj => {
  let acumulador = '['
  
  obj.forEach(frase => {
    const {id, texto, traduccion, conocida, intervalo} = frase;
    acumulador += `
      {
        id: ${id},
        texto: '${texto}',
        traduccion: '${traduccion}',
        conocida: ${conocida},
        intervalo: ${intervalo}
      },
    `
  })
  
  acumulador += ']'
  container.innerHTML = acumulador
}

imprimir(deleteRepe(frases));