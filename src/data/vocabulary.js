// ============================================================
//  VocApp — Vocabulary Data
//
//  CÓMO AGREGAR IMÁGENES / GIFS:
//  Cada palabra tiene un campo  image: null
//  Para agregar una imagen, reemplaza null por la URL:
//
//  image: "https://ejemplo.com/mi-imagen.gif"
//  image: "https://media.giphy.com/media/xxxx/giphy.gif"
//
//  Puedes usar links de:
//    • Giphy  → https://giphy.com  (clic derecho → copiar dirección de imagen)
//    • Tenor  → https://tenor.com
//    • Imgur  → https://imgur.com
//    • Cualquier URL directa de imagen (.jpg / .png / .gif / .webp)
//
//  Si image queda en null, el modal no mostrará sección de imagen.
// ============================================================

export const themes = [
  {
    id: "lifestyle",
    name: "Lifestyle & Routines",
    nameEs: "Estilo de Vida y Rutinas",
    icon: "🌟",
    color: "#6C63FF",
    gradient: "linear-gradient(135deg, #6C63FF, #A78BFA)",
    description: "Words related to daily life, habits, and routines",
    words: [
      { word: "wake up",        translation: "despertarse",              example: "I wake up at seven o'clock in the morning.",     pronunciation: "/weɪk ʌp/",           type: "verb",   image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd20zbGlhenRkN3BwbnNnMXUxbWJobTB5dmVscWUzYnRrb2VxMzFnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1fMjj5j2Z7chq/giphy.gif" },
      { word: "take a shower",  translation: "tomar un baño / ducharse", example: "I take a shower in the mornings.",                pronunciation: "/teɪk ə ˈʃaʊər/",    type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjZyNTRqNTlnY3p4OGl1cHg0bjV0eXdodGJob2xsaXRpbmYzajJ1ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xgiki9IXibq2goEPdz/giphy.gif" },
      { word: "hang out",       translation: "pasar el rato",            example: "Do you hang out with friends on weekends?",       pronunciation: "/hæŋ aʊt/",           type: "verb",   image: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHRia2dqYzlwNWNnNGkzNXo5cHhqaHowY3ZicTJobTV3ZG5xN3hhbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JGvm5p9sVFDRwhNqUd/giphy.gif" },
      { word: "do exercise",    translation: "hacer ejercicio",          example: "Do exercise three times a week.",                 pronunciation: "/duː ˈɛksərsaɪz/",    type: "verb",   image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXh6NjJ4YmtrYm85eGdudHhteXMwam1iNTJzd2Zid215b2t2aW5zciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OGXoB3XoyPIas/giphy.gif" },
      { word: "tidy",           translation: "arreglar / limpiar",       example: "Tidy the room every day.",                       pronunciation: "/ˈtaɪdi/",             type: "verb",   image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2RpYTBhZ3Rod205eGhzMmY3aHgzZGtma2txMDFxOGxpNXF0aGJiaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oKIPCSX4UHmuS41TG/giphy.gif" },
      { word: "smoke",          translation: "fumar",                    example: "Smoke 5 cigarettes a day.",                       pronunciation: "/smoʊk/",              type: "verb",   image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNqa3d3amZhMHdtMXlqaWk1Zzh0NnZ5Nmx0Nzg3d294ZGxlOW5jcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dZBa6EQnbnsHe/giphy.gif" },
      { word: "get up",         translation: "levantarse",               example: "What time do you get up on Mondays?",             pronunciation: "/gɛt ʌp/",            type: "verb",   image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGFrN3E5cTBwcHJ6ZTJrNTdidnRlbjZ2dHBlOGFpYnZqZGZqcjVpeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SXxwC9YMTokxA2TdGt/giphy.gif" },
      { word: "watch TV",       translation: "ver la televisión",        example: "I watch TV at 6:30 every evening.",               pronunciation: "/wɒtʃ ˌtiːˈviː/",     type: "verb",   image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanFrZGJwNXlocHR1cTVhdnJuanpsa3p1ZDQ4bDY1NzZrNzduM2Y4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qC5abwZ54KV6U/giphy.gif" },
      { word: "go to bed",      translation: "ir a la cama / dormir",    example: "Go to bed after midnight.",                      pronunciation: "/goʊ tə bɛd/",        type: "verb",   image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmN6d2w4Ym5mYXo2a3prNTZtbWh2MWg4cG5saDF0ZWhlbDJwYWE0ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gjsBu8ZUniOODwgPP5/giphy.gif" },
      { word: "listen to music",translation: "escuchar música",          example: "Listen to music too loud.",                      pronunciation: "/ˈlɪsən tə ˈmjuːzɪk/",type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGNpOTBrZTFhMjk4MHFzbjFrajRma3V6MTFhZmFmc3poMnd3amFxaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JOkDa3AcvEzm7rDHrh/giphy.gif" },
      { word: "have breakfast", translation: "desayunar",                example: "I usually have breakfast at eight.",              pronunciation: "/hæv ˈbrɛkfəst/",     type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHE5aWltemJiampxcGJ0cGY1NTFxMXZubnRxcTVqMGs4cDZneXI2ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fXi9LZbW3xkjn9L47W/giphy.gif" },
      { word: "have lunch",     translation: "almorzar",                 example: "What time do you have lunch?",                   pronunciation: "/hæv lʌntʃ/",         type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJnZnBsenp0ZHJteWoya3Vrcnd0dmQ1Z3d2b3NzbjVxeWZkOHFpbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/usbJDtoVHJgv6gHRou/giphy.gif" },
      { word: "have dinner",    translation: "cenar",                    example: "I have dinner with my family.",                  pronunciation: "/hæv ˈdɪnər/",        type: "phrase", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHlkY3p5aHBjZnpmMzM3ZHQ4cnR4OHd5YmhweWh3YXE4bGx5NzNpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghkKihjlHJ2W4/giphy.gif" },
      { word: "play sports",    translation: "hacer deportes",           example: "Do you play sports on weekends?",                pronunciation: "/pleɪ spɔːrts/",       type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGxnenZkdXNpdzQ1c3N5ZnJkMG1qZG9mcDB5eTg3Ym12Z2o1bmRlaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/f2otJkmMUDPa0/giphy.gif" },
      { word: "go to school",   translation: "ir a la escuela",          example: "I go to school by bus every morning.",           pronunciation: "/goʊ tə skuːl/",      type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlxcXBzMWhlZ3ZjOGV3d2N1ajlqbXFvZmkyemFlcWM4MjR2MnBlaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yVCajDohhJFq8/giphy.gif" },
    ],
  },
  {
    id: "comparisons",
    name: "Comparisons",
    nameEs: "Comparaciones",
    icon: "⚖️",
    color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B, #FCD34D)",
    description: "Adjectives and phrases used to compare things and people",
    words: [
      { word: "taller",          translation: "más alto",             example: "Bob is taller than him.",                                    pronunciation: "/ˈtɔːlər/",           type: "adjective", image: null },
      { word: "more expensive",  translation: "más caro",             example: "My car was more expensive than Ellen's.",                    pronunciation: "/mɔːr ɪkˈspɛnsɪv/",  type: "adjective", image: null },
      { word: "less expensive",  translation: "menos caro",           example: "This phone is less expensive than that one.",                pronunciation: "/lɛs ɪkˈspɛnsɪv/",   type: "adjective", image: null },
      { word: "the highest",     translation: "el más alto",          example: "Mount Everest is the highest mountain in the world.",        pronunciation: "/ðə ˈhaɪɪst/",        type: "adjective", image: null },
      { word: "the most beautiful",translation:"el más hermoso",      example: "Prague is the most beautiful city I've ever seen.",          pronunciation: "/ðə moʊst ˈbjuːtɪfəl/",type:"adjective",image: null },
      { word: "better",          translation: "mejor",                example: "Margarine today is better than it was in the past.",         pronunciation: "/ˈbɛtər/",            type: "adjective", image: null },
      { word: "worse",           translation: "peor",                 example: "The weather this summer is even worse than last summer.",    pronunciation: "/wɜːrs/",              type: "adjective", image: null },
      { word: "the best",        translation: "el mejor / lo mejor",  example: "Our tennis team trains hard to be the best.",                pronunciation: "/ðə bɛst/",           type: "adjective", image: null },
      { word: "faster",          translation: "más rápido",           example: "Ana runs faster than Pat does.",                             pronunciation: "/ˈfæstər/",           type: "adjective", image: null },
      { word: "as old as",       translation: "tan viejo como",       example: "Your car is as old as mine.",                               pronunciation: "/æz oʊld æz/",        type: "phrase",    image: null },
      { word: "bigger",          translation: "más grande",           example: "My house is bigger than yours.",                             pronunciation: "/ˈbɪɡər/",            type: "adjective", image: null },
      { word: "smaller",         translation: "más pequeño",          example: "The King John boat is smaller.",                             pronunciation: "/ˈsmɔːlər/",          type: "adjective", image: null },
      { word: "heavier",         translation: "más pesado",           example: "A tiger is heavier than a cheetah.",                        pronunciation: "/ˈhɛviər/",           type: "adjective", image: null },
      { word: "more dangerous",  translation: "más peligroso",        example: "Cycling is more dangerous than driving.",                    pronunciation: "/mɔːr ˈdeɪndʒərəs/", type: "adjective", image: null },
      { word: "the longest",     translation: "el más largo",         example: "The Nile is the longest river in the world.",                pronunciation: "/ðə ˈlɒŋɡɪst/",      type: "adjective", image: null },
    ],
  },
  {
    id: "food",
    name: "Food",
    nameEs: "Comida",
    icon: "🍽️",
    color: "#EF4444",
    gradient: "linear-gradient(135deg, #EF4444, #FB923C)",
    description: "Vocabulary for ingredients, dishes, quantifiers and containers",
    words: [
      { word: "steak",         translation: "filete / corte de carne",    example: "Great fish dishes, steak and pizza.",                     pronunciation: "/steɪk/",          type: "noun",   image: null },
      { word: "seafood",       translation: "mariscos",                   example: "We recommend the pasta and seafood.",                     pronunciation: "/ˈsiːfuːd/",       type: "noun",   image: null },
      { word: "junk food",     translation: "comida chatarra",            example: "Fast food doesn't have to be junk food.",                 pronunciation: "/ˈdʒʌŋk fuːd/",   type: "noun",   image: null },
      { word: "poultry",       translation: "aves / carne de ave",        example: "Do you like eating poultry?",                            pronunciation: "/ˈpoʊltri/",       type: "noun",   image: null },
      { word: "beverage",      translation: "bebida",                     example: "Beverages are on the menu.",                             pronunciation: "/ˈbɛvərɪdʒ/",     type: "noun",   image: null },
      { word: "a slice of",    translation: "una rebanada de",            example: "There is a piece of chicken and a slice of pizza.",       pronunciation: "/ə slaɪs ʌv/",     type: "phrase", image: null },
      { word: "a loaf of",     translation: "una hogaza de",              example: "I need to buy a loaf of bread.",                         pronunciation: "/ə loʊf ʌv/",      type: "phrase", image: null },
      { word: "a pinch of",    translation: "una pizca de",               example: "How many pinches of salt do you add to this soup?",      pronunciation: "/ə pɪntʃ ʌv/",     type: "phrase", image: null },
      { word: "a carton of",   translation: "un cartón de",               example: "There is a carton of milk in the fridge.",                pronunciation: "/ə ˈkɑːrtən ʌv/",  type: "phrase", image: null },
      { word: "a dozen of",    translation: "una docena de",              example: "I will buy a dozen of eggs.",                            pronunciation: "/ə ˈdʌzən ʌv/",    type: "phrase", image: null },
      { word: "a bowl of",     translation: "un tazón de",                example: "Can I get a bowl of peas?",                              pronunciation: "/ə boʊl ʌv/",      type: "phrase", image: null },
      { word: "a can of",      translation: "una lata de",                example: "There is a can of soda on the table.",                   pronunciation: "/ə kæn ʌv/",       type: "phrase", image: null },
      { word: "a bunch of",    translation: "un racimo de",               example: "She needs a bunch of bananas.",                          pronunciation: "/ə bʌntʃ ʌv/",     type: "phrase", image: null },
      { word: "fruit smoothie",translation: "batido de frutas",           example: "Come in for a fruit smoothie or a cappuccino.",          pronunciation: "/fruːt ˈsmuːði/",  type: "noun",   image: null },
      { word: "vegetarian",    translation: "vegetariano",                example: "We are looking for a vegetarian restaurant.",            pronunciation: "/ˌvɛdʒɪˈtɛəriən/",type: "adjective",image: null },
    ],
  },
  {
    id: "clothing",
    name: "Clothing",
    nameEs: "Ropa",
    icon: "👗",
    color: "#EC4899",
    gradient: "linear-gradient(135deg, #EC4899, #F472B6)",
    description: "Fashion vocabulary, garments, and shopping expressions",
    words: [
      { word: "suit",          translation: "traje",                   example: "Formal clothing that men might wear to a wedding is a suit.", pronunciation: "/suːt/",              type: "noun",      image: null },
      { word: "footwear",      translation: "calzado",                 example: "There are many different types of footwear.",                pronunciation: "/ˈfʊtwɛər/",          type: "noun",      image: null },
      { word: "scarf",         translation: "bufanda",                 example: "People put a scarf around their neck in winter.",            pronunciation: "/skɑːrf/",             type: "noun",      image: null },
      { word: "loose",         translation: "holgado / suelto",        example: "These pants are too loose.",                                pronunciation: "/luːs/",               type: "adjective", image: null },
      { word: "tight",         translation: "ajustado / apretado",     example: "I've already wore the tight ones yesterday.",               pronunciation: "/taɪt/",               type: "adjective", image: null },
      { word: "patterned",     translation: "estampado",               example: "There are two plain and two patterned jackets.",            pronunciation: "/ˈpætərnd/",           type: "adjective", image: null },
      { word: "plain",         translation: "liso / sin estampado",    example: "Give me the plain jacket.",                                 pronunciation: "/pleɪn/",              type: "adjective", image: null },
      { word: "flowery",       translation: "floral / con flores",     example: "The flowery dress is very beautiful.",                      pronunciation: "/ˈflaʊəri/",           type: "adjective", image: null },
      { word: "try on",        translation: "probarse",                example: "Can I try it on?",                                          pronunciation: "/traɪ ɒn/",            type: "verb",      image: null },
      { word: "bargain",       translation: "ganga",                   example: "I will take it, it's a bargain!",                           pronunciation: "/ˈbɑːrgɪn/",          type: "noun",      image: null },
      { word: "jacket",        translation: "chaqueta / chamarra",     example: "Like a jacket, but warmer.",                                pronunciation: "/ˈdʒækɪt/",           type: "noun",      image: null },
      { word: "sunglasses",    translation: "lentes de sol",           example: "Wear sunglasses to protect your eyes from the sun.",        pronunciation: "/ˈsʌnˌɡlæsɪz/",      type: "noun",      image: null },
      { word: "sweater",       translation: "suéter",                  example: "Marcus has got many sweaters in his wardrobe.",             pronunciation: "/ˈswɛtər/",            type: "noun",      image: null },
      { word: "running shoes", translation: "tenis / zapatillas",      example: "People wear running shoes when they exercise.",             pronunciation: "/ˈrʌnɪŋ ʃuːz/",       type: "noun",      image: null },
      { word: "tie",           translation: "corbata",                 example: "Give me the tie, please!",                                  pronunciation: "/taɪ/",                type: "noun",      image: null },
    ],
  },
  {
    id: "directions",
    name: "Directions & City",
    nameEs: "Direcciones y Ciudad",
    icon: "🗺️",
    color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
    description: "Phrases and words for navigating, places and giving directions",
    words: [
      { word: "go straight",   translation: "siga derecho",            example: "Go straight ahead for two blocks.",                         pronunciation: "/goʊ streɪt/",        type: "phrase",      image: null },
      { word: "crossroads",    translation: "cruce / intersección",    example: "Turn right at the crossroads.",                             pronunciation: "/ˈkrɒsroʊdz/",       type: "noun",        image: null },
      { word: "sidewalk",      translation: "acera / banqueta",        example: "You must walk on the sidewalk.",                            pronunciation: "/ˈsaɪdwɔːk/",        type: "noun",        image: null },
      { word: "city hall",     translation: "ayuntamiento",            example: "A building used as offices by the government is a city hall.",pronunciation: "/ˈsɪti hɔːl/",       type: "noun",        image: null },
      { word: "skyscraper",    translation: "rascacielos",             example: "You can see an Aztec temple and a modern skyscraper.",      pronunciation: "/ˈskaɪˌskreɪpər/",   type: "noun",        image: null },
      { word: "zebra lines",   translation: "paso de cebra / peatonal",example: "Cross the street carefully at the zebra lines.",            pronunciation: "/ˈziːbrə laɪnz/",     type: "noun",        image: null },
      { word: "turn right",    translation: "gire a la derecha",       example: "Turn right at the light.",                                  pronunciation: "/tɜːrn raɪt/",        type: "phrase",      image: null },
      { word: "next to",       translation: "al lado de",              example: "You will see the Italian restaurant next to an art gallery.",pronunciation: "/ˈnɛkst tuː/",        type: "preposition", image: null },
      { word: "across from",   translation: "enfrente de",             example: "You will see the embassy across from a bookshop.",          pronunciation: "/əˈkrɒs frʌm/",       type: "preposition", image: null },
      { word: "pawnshop",      translation: "casa de empeño",          example: "A shop where you can sell and buy used things is a pawnshop.",pronunciation: "/ˈpɔːnʃɒp/",         type: "noun",        image: null },
      { word: "traffic lights",translation: "semáforos",               example: "Take a left at the traffic lights.",                        pronunciation: "/ˈtræfɪk laɪts/",     type: "noun",        image: null },
      { word: "pharmacy",      translation: "farmacia",                example: "I need to buy medicine at the pharmacy.",                   pronunciation: "/ˈfɑːrməsi/",         type: "noun",        image: null },
      { word: "turn left",     translation: "gire a la izquierda",     example: "Take the first street and turn left.",                      pronunciation: "/tɜːrn lɛft/",        type: "phrase",      image: null },
      { word: "go past",       translation: "pase",                    example: "Go past the supermarket on your left.",                     pronunciation: "/goʊ pæst/",          type: "phrase",      image: null },
      { word: "library",       translation: "biblioteca",              example: "The city library is near the park.",                        pronunciation: "/ˈlaɪbrəri/",         type: "noun",        image: null },
    ],
  },
  {
    id: "past-events",
    name: "Past Events",
    nameEs: "Eventos Pasados",
    icon: "📅",
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #8B5CF6, #C4B5FD)",
    description: "Grammar and vocabulary for talking about past experiences (Simple Past)",
    words: [
      { word: "went",    translation: "fue / fui",             example: "I went to the movies and I saw a film.",              pronunciation: "/wɛnt/",       type: "verb", image: null },
      { word: "did",     translation: "hizo / hice",           example: "I didn't do anything special this weekend.",          pronunciation: "/dɪd/",        type: "verb", image: null },
      { word: "had",     translation: "tuvo / tuve",           example: "I had a terrible rash all over my face!",             pronunciation: "/hæd/",        type: "verb", image: null },
      { word: "saw",     translation: "vio / vi",              example: "I saw the robber. He ran across the street.",         pronunciation: "/sɔː/",        type: "verb", image: null },
      { word: "looked",  translation: "miró / miré",           example: "She looked in the mirror and smiled.",                pronunciation: "/lʊkt/",       type: "verb", image: null },
      { word: "studied", translation: "estudió / estudié",     example: "My father studied laws at the university.",           pronunciation: "/ˈstʌdid/",    type: "verb", image: null },
      { word: "stopped", translation: "se detuvo / paró",      example: "Suddenly, the lights went out and the treadmill stopped.", pronunciation: "/stɒpt/",  type: "verb", image: null },
      { word: "started", translation: "empezó / comenzó",      example: "It started snowing so we drove home.",                pronunciation: "/ˈstɑːrtɪd/",  type: "verb", image: null },
      { word: "bought",  translation: "compró / compré",       example: "I decided to buy a few and eat them on the way home.",pronunciation: "/bɔːt/",       type: "verb", image: null },
      { word: "left",    translation: "dejó / salió",          example: "Kelly left work at 7 o'clock yesterday.",             pronunciation: "/lɛft/",       type: "verb", image: null },
      { word: "stayed",  translation: "se quedó / me quedé",   example: "Last night I stayed at home.",                        pronunciation: "/steɪd/",      type: "verb", image: null },
      { word: "came",    translation: "vino / vine",           example: "Some teenagers came in.",                             pronunciation: "/keɪm/",       type: "verb", image: null },
      { word: "ran",     translation: "corrió / corrí",        example: "He ran across the street.",                           pronunciation: "/ræn/",        type: "verb", image: null },
      { word: "ate",     translation: "comió / comí",          example: "Just before a job interview, I ate a sandwich.",      pronunciation: "/eɪt/",        type: "verb", image: null },
      { word: "enjoyed", translation: "disfrutó / disfruté",   example: "My kids enjoyed this playhouse.",                     pronunciation: "/ɪnˈdʒɔɪd/",  type: "verb", image: null },
    ],
  },
  {
    id: "health",
    name: "Health & Ailments",
    nameEs: "Salud, Malestares y Primeros Auxilios",
    icon: "🏥",
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #67E8F9)",
    description: "Medical vocabulary, symptoms, body parts and treatments",
    words: [
      { word: "headache",       translation: "dolor de cabeza",     example: "I've got an awful headache.",                              pronunciation: "/ˈhɛdeɪk/",       type: "noun",      image: null },
      { word: "stomachache",    translation: "dolor de estómago",   example: "My dad's got an awful stomachache.",                       pronunciation: "/ˈstʌməkˌeɪk/",   type: "noun",      image: null },
      { word: "sore throat",    translation: "dolor de garganta",   example: "I have a bad sore throat.",                                pronunciation: "/sɔːr θroʊt/",     type: "noun",      image: null },
      { word: "cough",          translation: "tos / toser",         example: "Jerry is sick, he coughs.",                                pronunciation: "/kɒf/",            type: "noun",      image: null },
      { word: "fever",          translation: "fiebre",              example: "I feel terrible, I think I have a high fever.",            pronunciation: "/ˈfiːvər/",        type: "noun",      image: null },
      { word: "bandage",        translation: "vendaje / venda",     example: "A clean handkerchief makes a good bandage.",               pronunciation: "/ˈbændɪdʒ/",      type: "noun",      image: null },
      { word: "sneeze",         translation: "estornudar",          example: "Always cover your mouth when you sneeze.",                 pronunciation: "/sniːz/",          type: "verb",      image: null },
      { word: "throw up",       translation: "vomitar",             example: "Drink water after you throw up.",                          pronunciation: "/θroʊ ʌp/",        type: "verb",      image: null },
      { word: "sunburn",        translation: "quemadura de sol",    example: "I have a sunburn. Put some cream on it.",                  pronunciation: "/ˈsʌnbɜːrn/",     type: "noun",      image: null },
      { word: "bleeding",       translation: "sangrando / sangrado",example: "To stop someone's finger from bleeding, use a tissue.",   pronunciation: "/ˈbliːdɪŋ/",      type: "adjective", image: null },
      { word: "medicine",       translation: "medicina",            example: "You should go to a doctor for some medicine.",             pronunciation: "/ˈmɛdɪsɪn/",      type: "noun",      image: null },
      { word: "pills",          translation: "pastillas",           example: "Take these pills twice a day.",                            pronunciation: "/pɪlz/",           type: "noun",      image: null },
      { word: "ambulance",      translation: "ambulancia",          example: "Always call an ambulance in an emergency.",                pronunciation: "/ˈæmbjʊləns/",     type: "noun",      image: null },
      { word: "hurt",           translation: "doler / lastimar",    example: "I have a stomachache and it really hurts.",                pronunciation: "/hɜːrt/",          type: "verb",      image: null },
      { word: "pulled a muscle",translation: "tirón muscular",      example: "I pulled a muscle, so I need to apply heat to it.",       pronunciation: "/pʊld ə ˈmʌsəl/", type: "phrase",    image: null },
    ],
  },
];

export const getAllWords = () => {
  return themes.flatMap((theme) =>
    theme.words.map((word) => ({ ...word, themeId: theme.id, themeName: theme.name, themeColor: theme.color }))
  );
};