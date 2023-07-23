const phrases = [
  {
    id: 1,
    known: false,
    text: 'The sun is shining.',
    interval: 1,
    traduction: 'El sol está brillando.'
  },
  {
    id: 2,
    known: false,
    text: 'I love learning new things.',
    interval: 1,
    traduction: 'Me encanta aprender cosas nuevas.'
  },
  {
    id: 3,
    known: false,
    text: 'Life is full of surprises.',
    interval: 1,
    traduction: 'La vida está llena de sorpresas.'
  },
  {
    id: 4,
    known: false,
    text: "Time flies when you're having fun.",
    interval: 1,
    traduction: 'El tiempo vuela cuando te estás divirtiendo.'
  },
  {
    id: 5,
    known: false,
    text: 'The world is a book, and those who do not travel read only one page.',
    interval: 1,
    traduction: 'El mundo es un libro y aquellos que no viajan solo leen una página.'
  },
  {
    id: 6,
    known: false,
    text: 'Every moment is a fresh beginning.',
    interval: 1,
    traduction: 'Cada momento es un nuevo comienzo.'
  },
  {
    id: 7,
    known: false,
    text: 'The only limit to our realization of tomorrow will be our doubts of today.',
    interval: 1,
    traduction: 'El único límite para nuestra realización de mañana serán nuestras dudas de hoy.'
  },
  {
    id: 8,
    known: false,
    text: 'You are never too old to set another goal or to dream a new dream.',
    interval: 1,
    traduction: 'Nunca eres demasiado mayor para establecer otra meta o soñar un nuevo sueño.'
  },
  {
    id: 9,
    known: false,
    text: 'The only way to do great work is to love what you do.',
    interval: 1,
    traduction: 'La única forma de hacer un gran trabajo es amar lo que haces.'
  },
  {
    id: 10,
    known: false,
    text: 'Happiness is not something readymade. It comes from your own actions.',
    interval: 1,
    traduction: 'La felicidad no es algo prefabricado. Viene de tus propias acciones.'
  },
  {
    id: 11,
    known: false,
    text: "Believe you can and you're halfway there.",
    interval: 1,
    traduction: 'Cree que puedes y ya estás a mitad de camino.'
  },
  {
    id: 12,
    known: false,
    text: 'The only way to have a friend is to be one.',
    interval: 1,
    traduction: 'La única forma de tener un amigo es siendo uno.'
  },
  {
    id: 13,
    known: false,
    text: 'It always seems impossible until it is done.',
    interval: 1,
    traduction: 'Siempre parece imposible hasta que se hace.'
  },
  {
    id: 14,
    known: false,
    text: 'The only person you are destined to become is the person you decide to be.',
    interval: 1,
    traduction: 'La única persona que estás destinado a ser es la persona que decides ser.'
  },
  {
    id: 15,
    known: false,
    text: 'Life is not about finding yourself. Life is about creating yourself.',
    interval: 1,
    traduction: 'La vida no se trata de encontrarte a ti mismo. La vida se trata de crearte a ti mismo.'
  },
  {
    id: 16,
    known: false,
    text: "Don't watch the clock; do what it does. Keep going.",
    interval: 1,
    traduction: 'No mires el reloj; haz lo que hace. Sigue adelante.'
  },
  {
    id: 17,
    known: false,
    text: "You miss 100% of the shots you don't take.",
    interval: 1,
    traduction: 'Fallas el 100% de los tiros que no tomas.'
  },
  {
    id: 18,
    known: false,
    text: 'It does not matter how slowly you go as long as you do not stop.',
    interval: 1,
    traduction: 'No importa lo despacio que vayas mientras no te detengas.'
  },
  {
    id: 19,
    known: false,
    text: 'Success usually comes to those who are too busy to be looking for it.',
    interval: 1,
    traduction: 'El éxito generalmente llega a aquellos que están demasiado ocupados como para buscarlo.'
  },
  {
    id: 20,
    known: false,
    text: 'The only person who is educated is the one who has learned how to learn and change.',
    interval: 1,
    traduction: 'La única persona que está educada es aquella que ha aprendido a aprender y cambiar.'
  },
  {
    id: 21,
    known: false,
    text: "Opportunities don't happen. You create them.",
    interval: 1,
    traduction: 'Las oportunidades no suceden. Tú las creas.'
  },
  {
    id: 22,
    known: false,
    text: 'You are what you believe yourself to be.',
    interval: 1,
    traduction: 'Eres lo que crees que eres.'
  },
  {
    id: 23,
    known: false,
    text: 'In the middle of every difficulty lies opportunity.',
    interval: 1,
    traduction: 'En medio de cada dificultad yace una oportunidad.'
  },
  {
    id: 24,
    known: false,
    text: 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
    interval: 1,
    traduction: 'Cree en ti mismo y en todo lo que eres. Sabe que hay algo dentro de ti que es más grande que cualquier obstáculo.'
  },
  {
    id: 25,
    known: false,
    text: 'The best way to predict the future is to create it.',
    interval: 1,
    traduction: 'La mejor manera de predecir el futuro es crearlo.'
  },
  {
    id: 26,
    known: false,
    text: "It's not the years in your life that count, it's the life in your years.",
    interval: 1,
    traduction: 'No son los años de tu vida lo que cuenta, es la vida en tus años.'
  },
  {
    id: 27,
    known: false,
    text: 'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    interval: 1,
    traduction: 'Dentro de ti tienes en este momento todo lo que necesitas para lidiar con lo que el mundo te presente.'
  },
  {
    id: 28,
    known: false,
    text: 'I would rather die of passion than of boredom.',
    interval: 1,
    traduction: 'Preferiría morir de pasión que de aburrimiento.'
  },
  {
    id: 29,
    known: false,
    text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    interval: 1,
    traduction: 'No puedo cambiar la dirección del viento, pero puedo ajustar mis velas para siempre llegar a mi destino.'
  },
  {
    id: 30,
    known: false,
    text: 'Success is stumbling from failure to failure with no loss of enthusiasm.',
    interval: 1,
    traduction: 'El éxito es tropezar de fracaso en fracaso sin perder el entusiasmo.'
  },
  {
    id: 31,
    known: false,
    text: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
    interval: 1,
    traduction: 'Si realmente quieres hacer algo, encontrarás una manera. Si no, encontrarás una excusa.'
  },
  {
    id: 32,
    known: false,
    text: "Your time is limited, don't waste it living someone else's life.",
    interval: 1,
    traduction: 'Tu tiempo es limitado, no lo desperdicies viviendo la vida de otra persona.'
  },
  {
    id: 33,
    known: false,
    text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
    interval: 1,
    traduction: 'Lo único que se interpone entre tú y tu objetivo es la historia que sigues contándote sobre por qué no puedes lograrlo.'
  },
  {
    id: 34,
    known: false,
    text: 'What you do speaks so loudly that I cannot hear what you say.',
    interval: 1,
    traduction: 'Lo que haces habla tan fuerte que no puedo escuchar lo que dices.'
  },
  {
    id: 35,
    known: false,
    text: "You can't cross the sea merely by standing and staring at the water.",
    interval: 1,
    traduction: 'No puedes cruzar el mar simplemente parado y mirando el agua.'
  },
  {
    id: 36,
    known: false,
    text: "Don't let yesterday take up too much of today.",
    interval: 1,
    traduction: 'No permitas que ayer ocupe demasiado de hoy.'
  },
  {
    id: 37,
    known: false,
    text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    interval: 1,
    traduction: 'El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.'
  },
  {
    id: 38,
    known: false,
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    interval: 1,
    traduction: 'No te dejes empujar por los miedos en tu mente. Déjate guiar por los sueños en tu corazón.'
  },
  {
    id: 39,
    known: false,
    text: 'The secret to getting ahead is getting started.',
    interval: 1,
    traduction: 'El secreto para avanzar es comenzar.'
  },
  {
    id: 40,
    known: false,
    text: 'Life is 10% what happens to you and 90% how you react to it.',
    interval: 1,
    traduction: 'La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.'
  },
  {
    id: 41,
    known: false,
    text: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    interval: 1,
    traduction: 'Lo que obtienes al alcanzar tus metas no es tan importante como lo que te conviertes al alcanzar tus metas.'
  },
  {
    id: 42,
    known: false,
    text: 'The best revenge is massive success.',
    interval: 1,
    traduction: 'La mejor venganza es un éxito masivo.'
  },
  {
    id: 43,
    known: false,
    text: 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.',
    interval: 1,
    traduction: 'Tu trabajo va a ocupar una gran parte de tu vida, y la única forma de estar realmente satisfecho es hacer lo que crees que es un gran trabajo. Y la única forma de hacer un gran trabajo es amar lo que haces.'
  },
  {
    id: 44,
    known: false,
    text: "You can't use up creativity. The more you use, the more you have.",
    interval: 1,
    traduction: 'No puedes agotar la creatividad. Cuanto más la usas, más tienes.'
  },
  {
    id: 45,
    known: false,
    text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    interval: 1,
    traduction: 'Dentro de veinte años estarás más decepcionado por las cosas que no hiciste que por las que hiciste.'
  },
  {
    id: 46,
    known: false,
    text: 'Your life does not get better by chance, it gets better by change.',
    interval: 1,
    traduction: 'Tu vida no mejora por casualidad, mejora por el cambio.'
  },
  {
    id: 47,
    known: false,
    text: 'The man who has confidence in himself gains the confidence of others.',
    interval: 1,
    traduction: 'El hombre que tiene confianza en sí mismo obtiene la confianza de los demás.'
  },
  {
    id: 48,
    known: false,
    text: "You don't have to be great to start, but you have to start to be great.",
    interval: 1,
    traduction: 'No tienes que ser grandioso para comenzar, pero debes comenzar para ser grandioso.'
  },
  {
    id: 49,
    known: false,
    text: "If you don't like something, change it. If you can't change it, change your attitude.",
    interval: 1,
    traduction: 'Si no te gusta algo, cámbialo. Si no puedes cambiarlo, cambia tu actitud.'
  },
  {
    id: 50,
    known: false,
    text: "Life is not about waiting for the storm to pass, it's about learning how to dance in the rain.",
    interval: 1,
    traduction: 'La vida no se trata de esperar a que pase la tormenta, sino de aprender a bailar bajo la lluvia.'
  },
  {
    id: 51,
    known: false,
    text: 'Challenges are what make life interesting. Overcoming them is what makes life meaningful.',
    interval: 1,
    traduction: 'Los desafíos son lo que hacen interesante la vida. Superarlos es lo que da sentido a la vida.'
  },
  {
    id: 52,
    known: false,
    text: 'Success is not the key to happiness. Happiness is the key to success.',
    interval: 1,
    traduction: 'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.'
  },
  {
    id: 53,
    known: false,
    text: "Don't be afraid to give up the good to go for the great.",
    interval: 1,
    traduction: 'No temas renunciar a lo bueno para ir por lo grandioso.'
  },
  {
    id: 54,
    known: false,
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    interval: 1,
    traduction: 'El futuro pertenece a aquellos que creen en la belleza de sus sueños.'
  },
  {
    id: 55,
    known: false,
    text: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    interval: 1,
    traduction: 'Al final, recordaremos no las palabras de nuestros enemigos, sino el silencio de nuestros amigos.'
  },
  {
    id: 56,
    known: false,
    text: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.',
    interval: 1,
    traduction: 'Las mejores y más bellas cosas del mundo no pueden verse o tocarse, deben sentirse con el corazón.'
  },
  {
    id: 57,
    text: 'How are you?',
    traduction: '¿Cómo estás?',
    known: false,
    interval: 1
  },
  {
    id: 58,
    text: "What's up?",
    traduction: '¿Qué tal?',
    known: false,
    interval: 1
  },
  {
    id: 59,
    text: "I'm fine, thanks.",
    traduction: 'Estoy bien, gracias.',
    known: false,
    interval: 1
  },
  {
    id: 60,
    text: 'Not bad.',
    traduction: 'No está mal.',
    known: false,
    interval: 1
  },
  {
    id: 61,
    text: "What's new?",
    traduction: '¿Qué hay de nuevo?',
    known: false,
    interval: 1
  },
  {
    id: 62,
    text: 'Long time no see.',
    traduction: 'Cuánto tiempo sin verte.',
    known: false,
    interval: 1
  },
  {
    id: 63,
    text: 'I missed you.',
    traduction: 'Te he echado de menos.',
    known: false,
    interval: 1
  },
  {
    id: 64,
    text: "It's been a while.",
    traduction: 'Ha pasado un tiempo.',
    known: false,
    interval: 1
  },
  {
    id: 65,
    text: "How's your day?",
    traduction: '¿Cómo ha ido tu día?',
    known: false,
    interval: 1
  },
  {
    id: 66,
    text: 'Good luck!',
    traduction: '¡Buena suerte!',
    known: false,
    interval: 1
  },
  {
    id: 67,
    text: 'Have a good day!',
    traduction: '¡Que tengas un buen día!',
    known: false,
    interval: 1
  },
  {
    id: 68,
    text: 'Take care!',
    traduction: '¡Cuídate!',
    known: false,
    interval: 1
  },
  {
    id: 69,
    text: 'See you later!',
    traduction: '¡Hasta luego!',
    known: false,
    interval: 1
  },
  {
    id: 70,
    text: 'Goodbye!',
    traduction: '¡Adiós!',
    known: false,
    interval: 1
  },
  {
    id: 71,
    text: 'Nice to meet you!',
    traduction: '¡Encantado de conocerte!',
    known: false,
    interval: 1
  },
  {
    id: 72,
    text: 'How old are you?',
    traduction: '¿Cuántos años tienes?',
    known: false,
    interval: 1
  },
  {
    id: 73,
    text: 'Where are you from?',
    traduction: '¿De dónde eres?',
    known: false,
    interval: 1
  },
  {
    id: 74,
    text: 'What do you do?',
    traduction: '¿A qué te dedicas?',
    known: false,
    interval: 1
  },
  {
    id: 75,
    text: 'What are your hobbies?',
    traduction: '¿Cuáles son tus hobbies?',
    known: false,
    interval: 1
  },
  {
    id: 76,
    text: "What's your favorite food?",
    traduction: '¿Cuál es tu comida favorita?',
    known: false,
    interval: 1
  },
  {
    id: 77,
    text: "What's your favorite color?",
    traduction: '¿Cuál es tu color favorito?',
    known: false,
    interval: 1
  },
  {
    id: 78,
    text: "What's your favorite movie?",
    traduction: '¿Cuál es tu película favorita?',
    known: false,
    interval: 1
  },
  {
    id: 79,
    text: "What's your favorite song?",
    traduction: '¿Cuál es tu canción favorita?',
    known: false,
    interval: 1
  },
  {
    id: 80,
    text: "What's your favorite book?",
    traduction: '¿Cuál es tu libro favorito?',
    known: false,
    interval: 1
  },
  {
    id: 81,
    text: 'Do you have any pets?',
    traduction: '¿Tienes mascotas?',
    known: false,
    interval: 1
  },
  {
    id: 82,
    text: 'Do you like animals?',
    traduction: '¿Te gustan los animales?',
    known: false,
    interval: 1
  },
  {
    id: 83,
    text: 'Do you like sports?',
    traduction: '¿Te gustan los deportes?',
    known: false,
    interval: 1
  },
  {
    id: 84,
    text: 'Do you like music?',
    traduction: '¿Te gusta la música?',
    known: false,
    interval: 1
  },
  {
    id: 85,
    text: 'Do you like movies?',
    traduction: '¿Te gustan las películas?',
    known: false,
    interval: 1
  },
  {
    id: 86,
    text: 'Do you like reading books?',
    traduction: '¿Te gusta leer libros?',
    known: false,
    interval: 1
  },
  {
    id: 87,
    text: 'Do you like traveling?',
    traduction: '¿Te gusta viajar?',
    known: false,
    interval: 1
  },
  {
    id: 88,
    text: 'Do you like cooking?',
    traduction: '¿Te gusta cocinar?',
    known: false,
    interval: 1
  },
  {
    id: 89,
    text: 'Do you like dancing?',
    traduction: '¿Te gusta bailar?',
    known: false,
    interval: 1
  },
  {
    id: 90,
    text: 'Do you like swimming?',
    traduction: '¿Te gusta nadar?',
    known: false,
    interval: 1
  },
  {
    id: 91,
    text: 'Do you like hiking?',
    traduction: '¿Te gusta hacer senderismo?',
    known: false,
    interval: 1
  },
  {
    id: 92,
    text: 'Do you like camping?',
    traduction: '¿Te gusta acampar?',
    known: false,
    interval: 1
  },
  {
    id: 93,
    text: 'Do you like shopping?',
    traduction: '¿Te gusta ir de compras?',
    known: false,
    interval: 1
  },
  {
    id: 94,
    text: 'Do you like going to the beach?',
    traduction: '¿Te gusta ir a la playa?',
    known: false,
    interval: 1
  },
  {
    id: 95,
    text: 'Do you like going to the mountains?',
    traduction: '¿Te gusta ir a la montaña?',
    known: false,
    interval: 1
  },
  {
    id: 96,
    text: 'Do you like going to the park?',
    traduction: '¿Te gusta ir al parque?',
    known: false,
    interval: 1
  },
  {
    id: 97,
    text: 'Do you like going to the gym?',
    traduction: '¿Te gusta ir al gimnasio?',
    known: false,
    interval: 1
  },
  {
    id: 98,
    text: 'Do you like going to the cinema?',
    traduction: '¿Te gusta ir al cine?',
    known: false,
    interval: 1
  },
  {
    id: 99,
    text: 'Do you like going to the theater?',
    traduction: '¿Te gusta ir al teatro?',
    known: false,
    interval: 1
  },
  {
    id: 100,
    text: 'Do you like going to concerts?',
    traduction: '¿Te gusta ir a conciertos?',
    known: false,
    interval: 1
  }
];