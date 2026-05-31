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
      { word: "wake up", translation: "despertarse", example: "I wake up at seven o'clock in the morning.", pronunciation: "/weɪk ʌp/", type: "verb", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd20zbGlhenRkN3BwbnNnMXUxbWJobTB5dmVscWUzYnRrb2VxMzFnOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1fMjj5j2Z7chq/giphy.gif" },
      { word: "take a shower", translation: "tomar un baño / ducharse", example: "I take a shower in the mornings.", pronunciation: "/teɪk ə ˈʃaʊər/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjZyNTRqNTlnY3p4OGl1cHg0bjV0eXdodGJob2xsaXRpbmYzajJ1ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xgiki9IXibq2goEPdz/giphy.gif" },
      { word: "hang out", translation: "pasar el rato", example: "Do you hang out with friends on weekends?", pronunciation: "/hæŋ aʊt/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eHRia2dqYzlwNWNnNGkzNXo5cHhqaHowY3ZicTJobTV3ZG5xN3hhbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JGvm5p9sVFDRwhNqUd/giphy.gif" },
      { word: "do exercise", translation: "hacer ejercicio", example: "Do exercise three times a week.", pronunciation: "/duː ˈɛksərsaɪz/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXh6NjJ4YmtrYm85eGdudHhteXMwam1iNTJzd2Zid215b2t2aW5zciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OGXoB3XoyPIas/giphy.gif" },
      { word: "tidy", translation: "arreglar / limpiar", example: "Tidy the room every day.", pronunciation: "/ˈtaɪdi/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2RpYTBhZ3Rod205eGhzMmY3aHgzZGtma2txMDFxOGxpNXF0aGJiaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oKIPCSX4UHmuS41TG/giphy.gif" },
      { word: "smoke", translation: "fumar", example: "Smoke 5 cigarettes a day.", pronunciation: "/smoʊk/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDNqa3d3amZhMHdtMXlqaWk1Zzh0NnZ5Nmx0Nzg3d294ZGxlOW5jcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dZBa6EQnbnsHe/giphy.gif" },
      { word: "get up", translation: "levantarse", example: "What time do you get up on Mondays?", pronunciation: "/gɛt ʌp/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGFrN3E5cTBwcHJ6ZTJrNTdidnRlbjZ2dHBlOGFpYnZqZGZqcjVpeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SXxwC9YMTokxA2TdGt/giphy.gif" },
      { word: "watch TV", translation: "ver la televisión", example: "I watch TV at 6:30 every evening.", pronunciation: "/wɒtʃ ˌtiːˈviː/", type: "verb", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExanFrZGJwNXlocHR1cTVhdnJuanpsa3p1ZDQ4bDY1NzZrNzduM2Y4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qC5abwZ54KV6U/giphy.gif" },
      { word: "go to bed", translation: "ir a la cama / dormir", example: "Go to bed after midnight.", pronunciation: "/goʊ tə bɛd/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmN6d2w4Ym5mYXo2a3prNTZtbWh2MWg4cG5saDF0ZWhlbDJwYWE0ZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gjsBu8ZUniOODwgPP5/giphy.gif" },
      { word: "listen to music", translation: "escuchar música", example: "Listen to music too loud.", pronunciation: "/ˈlɪsən tə ˈmjuːzɪk/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGNpOTBrZTFhMjk4MHFzbjFrajRma3V6MTFhZmFmc3poMnd3amFxaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JOkDa3AcvEzm7rDHrh/giphy.gif" },
      { word: "have breakfast", translation: "desayunar", example: "I usually have breakfast at eight.", pronunciation: "/hæv ˈbrɛkfəst/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHE5aWltemJiampxcGJ0cGY1NTFxMXZubnRxcTVqMGs4cDZneXI2ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fXi9LZbW3xkjn9L47W/giphy.gif" },
      { word: "have lunch", translation: "almorzar", example: "What time do you have lunch?", pronunciation: "/hæv lʌntʃ/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJnZnBsenp0ZHJteWoya3Vrcnd0dmQ1Z3d2b3NzbjVxeWZkOHFpbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/usbJDtoVHJgv6gHRou/giphy.gif" },
      { word: "have dinner", translation: "cenar", example: "I have dinner with my family.", pronunciation: "/hæv ˈdɪnər/", type: "phrase", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHlkY3p5aHBjZnpmMzM3ZHQ4cnR4OHd5YmhweWh3YXE4bGx5NzNpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghkKihjlHJ2W4/giphy.gif" },
      { word: "play sports", translation: "hacer deportes", example: "Do you play sports on weekends?", pronunciation: "/pleɪ spɔːrts/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGxnenZkdXNpdzQ1c3N5ZnJkMG1qZG9mcDB5eTg3Ym12Z2o1bmRlaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/f2otJkmMUDPa0/giphy.gif" },
      { word: "go to school", translation: "ir a la escuela", example: "I go to school by bus every morning.", pronunciation: "/goʊ tə skuːl/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlxcXBzMWhlZ3ZjOGV3d2N1ajlqbXFvZmkyemFlcWM4MjR2MnBlaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yVCajDohhJFq8/giphy.gif" },
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
      { word: "taller", translation: "más alto", example: "Bob is taller than him.", pronunciation: "/ˈtɔːlər/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGg0eDg2Mjh4ZDRocjAxeWJlMmNoNTlwNXB2bW02eXB1OHBkdzFzaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JYO45IBz28Cnm/giphy.gif" },
      { word: "more expensive", translation: "más caro", example: "My car was more expensive than Ellen's.", pronunciation: "/mɔːr ɪkˈspɛnsɪv/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3I5bDY5MWF5ODI2aG11ZXBlOGN4Mm9zNXo4OTF4OHN2NnN2enl6cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BI2fB0DCdz2lG/giphy.gif" },
      { word: "less expensive", translation: "menos caro", example: "This phone is less expensive than that one.", pronunciation: "/lɛs ɪkˈspɛnsɪv/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2l5aGVwYXRtMmo4eXg3Ym52ZG5qd3l6cmw2d2JraGN0a3E5cHd0YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yBzRyo9EycRFseOw8Y/giphy.gif" },
      { word: "the highest", translation: "el más alto", example: "Mount Everest is the highest mountain in the world.", pronunciation: "/ðə ˈhaɪɪst/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG5uYXhiYTJibGFndmh0MDNtNGYyeThidmRnbDFuMXNncmtrd2dlNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3Xzlefv57zcrVIPPRN/giphy.gif" },
      { word: "the most beautiful", translation: "el más hermoso", example: "Prague is the most beautiful city I've ever seen.", pronunciation: "/ðə moʊst ˈbjuːtɪfəl/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cDkwZDdhb2Y4cTZnZ3BtZmd4eWZhYm5ob2Ryc3Fkb3lxaDV3ejZldCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ismz4HYsMCLy6n6vUs/giphy.gif" },
      { word: "better", translation: "mejor", example: "Margarine today is better than it was in the past.", pronunciation: "/ˈbɛtər/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2VtOXprcjJvYmM4Z2Z6anRmazdnZzZwdmtqYjdncjR3ZmU2bTM2MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/icJA0VF7ntoEL18Jez/giphy.gif" },
      { word: "worse", translation: "peor", example: "The weather this summer is even worse than last summer.", pronunciation: "/wɜːrs/", type: "adjective", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnozMmNiYmxudnBnb2c4bjZlMDVycGg0NnVpeTNrMGdnMjE4ZTVtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yLUDES1hibWNiwBCNs/giphy.gif" },
      { word: "the best", translation: "el mejor / lo mejor", example: "Our tennis team trains hard to be the best.", pronunciation: "/ðə bɛst/", type: "adjective", image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Z3OXJveDNkOWd6bnEydjZleXM5MWkwNngzdG50Z2c5ejN3YWVvaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jp4dchTKX6BzGkZ5DL/giphy.gif" },
      { word: "faster", translation: "más rápido", example: "Ana runs faster than Pat does.", pronunciation: "/ˈfæstər/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXhvbDZ2NTA2YnF1dHVjY3N5cWpvbm9yaDV4OWY5Z2E0YnNoZWtrayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUOxeZUc8UFwMgH2MM/giphy.gif" },
      { word: "as old as", translation: "tan viejo como", example: "Your car is as old as mine.", pronunciation: "/æz oʊld æz/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa215aWtrd3BvbXhhcHA1ZTV0OXd1eTF2ejR4NXpubnM4dTd3ejlxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DWo6beGJTTqFi/giphy.gif" },
      { word: "bigger", translation: "más grande", example: "My house is bigger than yours.", pronunciation: "/ˈbɪɡər/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjVucTB0Njh4enhwNmxtOWpzbWZvMnp1YWYwOWxqZXh3NHlicjJsbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0E6nXSLFtqcPKs8trF/giphy.gif" },
      { word: "smaller", translation: "más pequeño", example: "The King John boat is smaller.", pronunciation: "/ˈsmɔːlər/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTFrOXFudjZyY3l4M2htYXZjczI3eW9waDF5Z2lnc2FnbnByM2k2MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XPF7ZgSxrc5Hvc8JEu/giphy.gif" },
      { word: "heavier", translation: "más pesado", example: "A tiger is heavier than a cheetah.", pronunciation: "/ˈhɛviər/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXRxdXZuMHRrbTZjMGF2MWlqMDh1OGE2bW41dmpud2FyYmk4ZWhodSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qnaCSVwRTmsgg/giphy.gif" },
      { word: "more dangerous", translation: "más peligroso", example: "Cycling is more dangerous than driving.", pronunciation: "/mɔːr ˈdeɪndʒərəs/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2pvMGQwM2x5N3V4bHdwY3JrdWw0dGtzb21qMWt6eGx2MDlrbDFvNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Sr8oSF1yr627lBcaVE/giphy.gif" },
      { word: "the longest", translation: "el más largo", example: "The Nile is the longest river in the world.", pronunciation: "/ðə ˈlɒŋɡɪst/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNkYTBuOTV5ZjFuN2l4c2hkMXppdW93M21ucTI3bjJkeXJrYmlrbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VG1WXvVzO33TsSc8Fc/giphy.gif" },
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
      { word: "steak", translation: "filete / corte de carne", example: "Great fish dishes, steak and pizza.", pronunciation: "/steɪk/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5mbmh5c3J1N3Zhcm80NmVhdnoxanJpcWw5MDlsOWxrbXZwa3dmMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PIkdtQqRTHU4WGywQ3/giphy.gif" },
      { word: "seafood", translation: "mariscos", example: "We recommend the pasta and seafood.", pronunciation: "/ˈsiːfuːd/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGcwZHRyeTRwa2h5ZDZtN3M5ZjkxdGs4cXRoZDNqZzd3NWJxYnVpNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7nunCIyCESdLhUJmo2/giphy.gif" },
      { word: "junk food", translation: "comida chatarra", example: "Fast food doesn't have to be junk food.", pronunciation: "/ˈdʒʌŋk fuːd/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3ptOWhpdjVyaGdiZXBueWQ4eDVzaG02Z3gxcTV0YnI4bjl3bXp6eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8innX0LZZLUI0/giphy.gif" },
      { word: "poultry", translation: "aves / carne de ave", example: "Do you like eating poultry?", pronunciation: "/ˈpoʊltri/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWNtN3VydXc4ZWg0b2gyMjMybjdnNXR1MG41aHVtM2kxMmt5aXYwdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cLmilkBeM5DgEevOd1/giphy.gif" },
      { word: "beverage", translation: "bebida", example: "Beverages are on the menu.", pronunciation: "/ˈbɛvərɪdʒ/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3lpb2oxdnhtNHhtZ2QydHdza21sbWhuOHlsYzM2NGkzaDJicXp3eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d9A3OAEoPMsSEMcRPy/giphy.gif" },
      { word: "a slice of", translation: "una rebanada de", example: "There is a piece of chicken and a slice of pizza.", pronunciation: "/ə slaɪs ʌv/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm1xcHQ1cTFzc29mY2NneDM2MmVwNWExM2E1ZmM0eHJtOW9haDZ4NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/132pnhRx4EM7ni/giphy.gif" },
      { word: "a loaf of", translation: "una hogaza de", example: "I need to buy a loaf of bread.", pronunciation: "/ə loʊf ʌv/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3h5OWllb2gyZmJxeHF4MmExcGt4ZHBhMGFlcnFic2tybG1qeWl4eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/J8pIanYqwfgZulHkiA/giphy.gif" },
      { word: "a pinch of", translation: "una pizca de", example: "How many pinches of salt do you add to this soup?", pronunciation: "/ə pɪntʃ ʌv/", type: "phrase", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjJraDZyZGwxYmRlZmNqZDBuaWJrcjlqcHZqbTVpOTh6ODRwcmFxMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4Jz3a8jO92crUlWM/giphy.gif" },
      { word: "a carton of", translation: "un cartón de", example: "There is a carton of milk in the fridge.", pronunciation: "/ə ˈkɑːrtən ʌv/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHcyMjZucWwzNGt0MXZ4YWFzdHdna3M0NjJxZnhndGdmdDN0aTUyMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ddFtcLORJNw4rZDT4Q/giphy.gif" },
      { word: "a dozen of", translation: "una docena de", example: "I will buy a dozen of eggs.", pronunciation: "/ə ˈdʌzən ʌv/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanZqNnQ1d21oYnowYnlsY3R0bWgyaDNsbmIydDZvOHF6bTdtY3R2NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Qtq5Lxz1kSMyz05nhW/giphy.gif" },
      { word: "a bowl of", translation: "un tazón de", example: "Can I get a bowl of peas?", pronunciation: "/ə boʊl ʌv/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eGt6NXljOHQ5aDFsazJ4bWE5OHFmaHhuZnJlNzYzbGsyZTNtOTZxdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cIl1m8eDB3xqQQ3gs8/giphy.gif" },
      { word: "a can of", translation: "una lata de", example: "There is a can of soda on the table.", pronunciation: "/ə kæn ʌv/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3llMHo1bWpnMnY2YXU0cmp6eWEycG1weWNpNjR0M3ViajZocHAyZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KEhIB4JWqqV9u/giphy.gif" },
      { word: "a bunch of", translation: "un racimo de", example: "She needs a bunch of bananas.", pronunciation: "/ə bʌntʃ ʌv/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaThvbzM4aGNveHViaWZyd2duenpieTg2dTVubTdoa2lqNDVianB2OSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dFt3xka1MOxpLi5PCL/giphy.gif" },
      { word: "fruit smoothie", translation: "batido de frutas", example: "Come in for a fruit smoothie or a cappuccino.", pronunciation: "/fruːt ˈsmuːði/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHQ3MTVwdHMxc21xNjNsYnI3Y29mbzd1dDl0bXFhNDI1MnNvdjl4bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oz8xHfVJDV6qYbBCg/giphy.gif" },
      { word: "vegetarian", translation: "vegetariano", example: "We are looking for a vegetarian restaurant.", pronunciation: "/ˌvɛdʒɪˈtɛəriən/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGR6NzlkbmpjcmRieG83ZzljenczNm04aWx5N3NucTUwdTFqZHB6dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2XEQHZPVq7GjS/giphy.gif" },
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
      { word: "suit", translation: "traje", example: "Formal clothing that men might wear to a wedding is a suit.", pronunciation: "/suːt/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW44anNzemZ6aWJnNmxkZ2FwNWxqZWhrZ3FnY3diaGdod292M2ZubCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/U6Sd02nKoLb3i/giphy.gif" },
      { word: "footwear", translation: "calzado", example: "There are many different types of footwear.", pronunciation: "/ˈfʊtwɛər/", type: "noun", image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzIzcWY5MjJ3MDl0amd1dzJqcHdnOW95bXZmcm1sazBmY3diMDR2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XDPFUU2Njt4HeAzMrM/giphy.gif" },
      { word: "scarf", translation: "bufanda", example: "People put a scarf around their neck in winter.", pronunciation: "/skɑːrf/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3BvcDM2MThycjdkMXIwam1wdXU1NDM1eDJ5N3B4MjlzdjliY3EweiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EGn6QuuvGO9BS/giphy.gif" },
      { word: "loose", translation: "holgado / suelto", example: "These pants are too loose.", pronunciation: "/luːs/", type: "adjective", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHRnb3k4cHY5cnF5N25mbzAxamlxYW9mazVsM3Bzc3UyenhlNHF5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1r5xnk9GA73wI/giphy.gif" },
      { word: "tight", translation: "ajustado / apretado", example: "I've already wore the tight ones yesterday.", pronunciation: "/taɪt/", type: "adjective", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWFxNGtobGc1M2x6Z3M3Nmh2djJsOHFld2p5emFoYm91Zzc3OHN3cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ah7k9Vd9PXP6WiWxp8/giphy.gif" },
      { word: "patterned", translation: "estampado", example: "There are two plain and two patterned jackets.", pronunciation: "/ˈpætərnd/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2dva29qdzI1eHNzcWxreDVhYzlhYjZmY3M5bm4zbWFvaDg0enJzeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7iA3L5k3wMLMT5MaeT/giphy.gif" },
      { word: "plain", translation: "liso / sin estampado", example: "Give me the plain jacket.", pronunciation: "/pleɪn/", type: "adjective", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2E2NzFhY2Z1bDA3cTV1cHJveXRvODkwZGIxZmZ0czRpc29yOXA1cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BI0NvISfNMTa6Ey99x/giphy.gif" },
      { word: "flowery", translation: "floral / con flores", example: "The flowery dress is very beautiful.", pronunciation: "/ˈflaʊəri/", type: "adjective", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWR4ajN2eWNxcDVpazJuZjZqdG96dmhqZGgzOW1xY2MyNWNldWFtMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehNnJsYxhn1YDmYQ9z/giphy.gif" },
      { word: "try on", translation: "probarse", example: "Can I try it on?", pronunciation: "/traɪ ɒn/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTkwdmRsOWhvM2MzdzI2ajV6cmQxOXNjbDhwYXhnbTVibXRhbmR6YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PSvMzf5eLjwBO/giphy.gif" },
      { word: "bargain", translation: "ganga", example: "I will take it, it's a bargain!", pronunciation: "/ˈbɑːrgɪn/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDg0azl0MXpvN3V2eHRhdjZjdWJoNGx4bGc4d3EzYjhva3ptbmI4aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Ayx3dO4xruVqM/giphy.gif" },
      { word: "jacket", translation: "chaqueta / chamarra", example: "Like a jacket, but warmer.", pronunciation: "/ˈdʒækɪt/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjFkdTQ3djNkcmtpaWk2eHhseXIwZXZwZG45N3p1MWczc3hqZmJxdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o85xzUnYfbfZJsEwg/giphy.gif" },
      { word: "sunglasses", translation: "lentes de sol", example: "Wear sunglasses to protect your eyes from the sun.", pronunciation: "/ˈsʌnˌɡlæsɪz/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2wwNDVrczVtZHF6aDZvaHVtZWo0amw2Zmk0bHJsaGMyOXFxdmI4MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1jnyRP4DorCh2/giphy.gif" },
      { word: "sweater", translation: "suéter", example: "Marcus has got many sweaters in his wardrobe.", pronunciation: "/ˈswɛtər/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjI0c2N5NWJ1Ynh0bGE2bXJtNXNqMXI0Y3N2M2p1dmZhM3hoOTF3MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ukmZRuEqc2Rbi/giphy.gif" },
      { word: "running shoes", translation: "tenis / zapatillas", example: "People wear running shoes when they exercise.", pronunciation: "/ˈrʌnɪŋ ʃuːz/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHNsZWFhcXRlMnd0MnB1ajk1bnNhOWkzdXJycTRvdHY1MGE0N3ZlNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mD9gTVfZqyiCoQ4Tpt/giphy.gif" },
      { word: "tie", translation: "corbata", example: "Give me the tie, please!", pronunciation: "/taɪ/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3VvN2k4ZDY1aHYzZnRyeGNtZGx5bG4zdTRobjRtbWd5NWU5MDl2ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tW2rXVJQnYKPu/giphy.gif" },
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
      { word: "go straight", translation: "siga derecho", example: "Go straight ahead for two blocks.", pronunciation: "/goʊ streɪt/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmtoNWplY2V3bmk1bGc0ZmpzcGt5bXBkb3V5ODd4MWJpdzI2OHF0diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/h8seIFRO8XYXY5Ogha/giphy.gif" },
      { word: "crossroads", translation: "cruce / intersección", example: "Turn right at the crossroads.", pronunciation: "/ˈkrɒsroʊdz/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzdwdjloZjNlamxuaW5kY3RwcGQ2NnJicm54dDlrYXBoNmRta3FpeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yC9g3FhMIdmotdtvuP/giphy.gif" },
      { word: "sidewalk", translation: "acera / banqueta", example: "You must walk on the sidewalk.", pronunciation: "/ˈsaɪdwɔːk/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDZseDZ6cW5zc2ZsOTFhZWIwYWg4M2k0enJkdmw5eTVoMHJmcHRkNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pBPTgG1MhDSAmBOJ3j/giphy.gif" },
      { word: "city hall", translation: "ayuntamiento", example: "A building used as offices by the government is a city hall.", pronunciation: "/ˈsɪti hɔːl/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHNvOWhxaWlnY21kM3BpNjl0ODBpbWhjb284ZWxtbmY2dzIwOXppbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/PMJK4tKhkCxmRJwOmh/giphy.gif" },
      { word: "skyscraper", translation: "rascacielos", example: "You can see an Aztec temple and a modern skyscraper.", pronunciation: "/ˈskaɪˌskreɪpər/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGZ5dGt3cTdmOXFnbzR3Z3kyd2hyb2Q1ajg4Zmw1bGU3aWVwd2UydiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SuKu77KpI6docs0zPm/giphy.gif" },
      { word: "zebra lines", translation: "paso de cebra / peatonal", example: "Cross the street carefully at the zebra lines.", pronunciation: "/ˈziːbrə laɪnz/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Y3pubWc1MTV4cHV3MXM1YXQ2azBiM3A2Z2tmYTFubnkxbjEwd3gyOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7TKykDLRzye5Szn2/giphy.gif" },
      { word: "turn right", translation: "gire a la derecha", example: "Turn right at the light.", pronunciation: "/tɜːrn raɪt/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXByZ2s1d2hla3Z5azg0MHR5ZzVtcnpiZnI0dm50eTRlNmZnZmt3ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/T4uc6LtL1X97FmjOXv/giphy.gif" },
      { word: "next to", translation: "al lado de", example: "You will see the Italian restaurant next to an art gallery.", pronunciation: "/ˈnɛkst tuː/", type: "preposition", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW02MDlqMWtud296a3BvcHpkNmphOGlnajNvbms2eXczbHQxaTkweiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eNq7ibFmMIwwseMtdk/giphy.gif" },
      { word: "across from", translation: "enfrente de", example: "You will see the embassy across from a bookshop.", pronunciation: "/əˈkrɒs frʌm/", type: "preposition", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW85amh4ZGN6cmttZHhwZ244NmFibjdsYjZudG81ZGN1ZXl2bzdwbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WgObfIhbWCPEsS9xNL/giphy.gif" },
      { word: "pawnshop", translation: "casa de empeño", example: "A shop where you can sell and buy used things is a pawnshop.", pronunciation: "/ˈpɔːnʃɒp/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmpldHZhaDY5cXI5OHBsNTl6MXBscGVmZ3ZvNmI5YjY5bGc1OWs3YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o8dFHaKKXaCxosgw0/giphy.gif" },
      { word: "traffic lights", translation: "semáforos", example: "Take a left at the traffic lights.", pronunciation: "/ˈtræfɪk laɪts/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3A3a2x3MTliMTJiYTh1azUyZ3RncDlhMGlmOHBmMHp2ZWthYnNudyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OpS52lUOA0mvK6VbQI/giphy.gif" },
      { word: "pharmacy", translation: "farmacia", example: "I need to buy medicine at the pharmacy.", pronunciation: "/ˈfɑːrməsi/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGRydTU2dnk3eHU3enpha3dudWx5eDU3M2xrNjJoNmF2bHU4bW03eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LZVVTD9ybVPGC4heYc/giphy.gif" },
      { word: "turn left", translation: "gire a la izquierda", example: "Take the first street and turn left.", pronunciation: "/tɜːrn lɛft/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aTd2d3B4d2tma3F6NjY0c20xaGw4em0wcnVwZGdra3V0Y2twb3JkdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fSqkHB10HX1nUQvJDv/giphy.gif" },
      { word: "go past", translation: "pase", example: "Go past the supermarket on your left.", pronunciation: "/goʊ pæst/", type: "phrase", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW5ja3Y2aXU4ZmtkaDN6MmMydHJ2cjkwbWpxeWdpcmdodmU0ZXI5aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o85gee79koBX7mBIA/giphy.gif" },
      { word: "library", translation: "biblioteca", example: "The city library is near the park.", pronunciation: "/ˈlaɪbrəri/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODk4NWtqbDl4bThnMXZ6d280bmswMGZicHR2N3g1dWtna2VuOWVhcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DOjvtoWC6S0qbpUUyE/giphy.gif" },
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
      { word: "went", translation: "fue / fui", example: "I went to the movies and I saw a film.", pronunciation: "/wɛnt/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjBjdjEzMWZxZm0zZGxxeXhnZmNwOWRxZjF2OXR6amE1dWdtdDNhZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XthnqxI6GVVdCxaU54/giphy.gif" },
      { word: "did", translation: "hizo / hice", example: "I didn't do anything special this weekend.", pronunciation: "/dɪd/", type: "verb", image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTN5ejRobnE3NHlsenN0NHZxdW1qOHZwNGt1bjc2Z2ZwcmkxdmxuMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RHZeG3DQIsPUlJ6seI/giphy.gif" },
      { word: "had", translation: "tuvo / tuve", example: "I had a terrible rash all over my face!", pronunciation: "/hæd/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY25pNTI4dDM5d21pdjRqaXYzeTluZWNkYXN2cWszOWt1c2sydG03NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ePb1CHEjfSRhn6r3c/giphy.gif" },
      { word: "saw", translation: "vio / vi", example: "I saw the robber. He ran across the street.", pronunciation: "/sɔː/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXd3aHd1dG5ndDBiNXJhZjhpcXVjcWZyb2N5YWpwcnJybGhpenkzeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cewvmYhuz58pATZaVv/giphy.gif" },
      { word: "looked", translation: "miró / miré", example: "She looked in the mirror and smiled.", pronunciation: "/lʊkt/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDl4OGprbTdpbWNseGxmeDZiajRrNjNocG5zMHJpMzYyZzVleDc4ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1fUpRxGqSJBCdvbIsR/giphy.gif" },
      { word: "studied", translation: "estudió / estudié", example: "My father studied laws at the university.", pronunciation: "/ˈstʌdid/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaW55ZTJweDU1MXN4dDFzd2d4aGYyaXdyZDRnYnppdnA0ZnloYjA3MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/H48YKEw3fXrcvIF2xE/giphy.gif" },
      { word: "stopped", translation: "se detuvo / paró", example: "Suddenly, the lights went out and the treadmill stopped.", pronunciation: "/stɒpt/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2prcmZ3a2xkdHVoaDR0M2lhcmRpYjRyZWZrcTE1OXdocXVnM2l1eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WrgAGkGrh0MD1Z2gkO/giphy.gif" },
      { word: "started", translation: "empezó / comenzó", example: "It started snowing so we drove home.", pronunciation: "/ˈstɑːrtɪd/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWtoNXJpem8yaTIybTF3bzFkeDBza2luZzRveXZlcnpvMXJjbXU1dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hubHSTlUhzsTECtY14/giphy.gif" },
      { word: "bought", translation: "compró / compré", example: "I decided to buy a few and eat them on the way home.", pronunciation: "/bɔːt/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzdkZHAzZ2dtenVhOGxlaHduOTRrbm16ZWtwMzFsaXNodXl5Y3BtbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uY4nBoAMhwGkZehYSg/giphy.gif" },
      { word: "left", translation: "dejó / salió", example: "Kelly left work at 7 o'clock yesterday.", pronunciation: "/lɛft/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGV5ZjJ1NjhjamUyazk3eDRybDV1Nzh6NmUwank1bnkzdzBtanBnbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYs3vYhjHoLuaYg/giphy.gif" },
      { word: "stayed", translation: "se quedó / me quedé", example: "Last night I stayed at home.", pronunciation: "/steɪd/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXptYmR5ejYzaXMwajR3MTJ4Ym14aHMwZGd3N2hmZmN3YWZsb3piZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mWRPZvOlm9gBYY1lAR/giphy.gif" },
      { word: "came", translation: "vino / vine", example: "Some teenagers came in.", pronunciation: "/keɪm/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHozem0yYjFmcmo3ejhxZzE4NzVtMmxvNTdmbDdkcDVjeDF3ZnQwdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GkdnvLZIrKVxtSDG22/giphy.gif" },
      { word: "ran", translation: "corrió / corrí", example: "He ran across the street.", pronunciation: "/ræn/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzhkbmdyMzU3NDBzYnB3ZW9xZjExajI2Y3RxZXlzeHdvMXNxNXU0dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XHdbj1gRpLU3RZHCFU/giphy.gif" },
      { word: "ate", translation: "comió / comí", example: "Just before a job interview, I ate a sandwich.", pronunciation: "/eɪt/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG85NHZlOTlzNWdpMWhqaWs3b2hsa254cW8zNnZjamZxbjRzZmVmbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d2ItDZZumUI6Y/giphy.gif" },
      { word: "enjoyed", translation: "disfrutó / disfruté", example: "My kids enjoyed this playhouse.", pronunciation: "/ɪnˈdʒɔɪd/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dTRneXA4bzhvNWUyemlmZmM0cjFxdWYxZGVkbGp3d2wzY2NjaWZtNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/eLtCyLNngd7dmFm8NH/giphy.gif" },
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
      { word: "headache", translation: "dolor de cabeza", example: "I've got an awful headache.", pronunciation: "/ˈhɛdeɪk/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3VycGE2amcxem11YmxocjM0em16cDIwZTVoOXgzbjZ5MjEyeXJxMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KESH0xxYE1oqtbapvZ/giphy.gif" },
      { word: "stomachache", translation: "dolor de estómago", example: "My dad's got an awful stomachache.", pronunciation: "/ˈstʌməkˌeɪk/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ZxN3A1MmY1Mno3cXp4emFxZjU0N2VraHVndTA5c24wYmN1MmhibyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3d3KX0JesK43XmLSDe/giphy.gif" },
      { word: "sore throat", translation: "dolor de garganta", example: "I have a bad sore throat.", pronunciation: "/sɔːr θroʊt/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTluMGJhN2ZkMXp2MmVwbzZ5OTBldHFxZGR4Nmxkd3N6Ymg3MzJxaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYwg9gvb34CDJyE/giphy.gif" },
      { word: "cough", translation: "tos / toser", example: "Jerry is sick, he coughs.", pronunciation: "/kɒf/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG1uNTJiMTBmdm02cTkzaGZ4MjFvOWJjYjR5OXB0cmR0OHg4NnZkeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3og0IFntLbrW7yuamQ/giphy.gif" },
      { word: "fever", translation: "fiebre", example: "I feel terrible, I think I have a high fever.", pronunciation: "/ˈfiːvər/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanBvOGl5dGp3bmsyYW5iOGNpN2x4cHcwbTl2Nng2aDIzN2wycTg3MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4pSWx5JvWjnOHYXu/giphy.gif" },
      { word: "bandage", translation: "vendaje / venda", example: "A clean handkerchief makes a good bandage.", pronunciation: "/ˈbændɪdʒ/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzg5cmp0NTZmOGNuMDRxNXNxNHpkZDR3Y29ibzQ2N2c1Yzd6dWpldyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nDJy9wwDktAwU/giphy.gif" },
      { word: "sneeze", translation: "estornudar", example: "Always cover your mouth when you sneeze.", pronunciation: "/sniːz/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3hzc3hmNWFsOTV0bDVqbml6Z3Z1bHBpMmJmZjR2Z3Nwam5qajlmNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Mgs7NWPOdsj9m/giphy.gif" },
      { word: "throw up", translation: "vomitar", example: "Drink water after you throw up.", pronunciation: "/θroʊ ʌp/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanRpcjBtaGUwZTU2MXN6dGVhaXIweDBuN2lkbG91ZTJ5MDlmdWtrNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/12P6AnN6DcQj1S/giphy.gif" },
      { word: "sunburn", translation: "quemadura de sol", example: "I have a sunburn. Put some cream on it.", pronunciation: "/ˈsʌnbɜːrn/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Uwd2c0aGx2OWRtMmVsZmNuZ3lmMnBnajEzcWdvNmhobXdvcWtsZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Jk6zdJzKyBC80/giphy.gif" },
      { word: "bleeding", translation: "sangrando / sangrado", example: "To stop someone's finger from bleeding, use a tissue.", pronunciation: "/ˈbliːdɪŋ/", type: "adjective", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazMwYWR2dHIwODhsaDZmc3l3bWdmMDY2cWl6cnExNHZldzR3aGV5aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QJtiS9rHFqauLNJ5cP/giphy.gif" },
      { word: "medicine", translation: "medicina", example: "You should go to a doctor for some medicine.", pronunciation: "/ˈmɛdɪsɪn/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmI2N29nbXh3ODVzNHd6d3pkcTE3aWp4MDlpbTc3NWR5NXdhbGNyZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NsDgJPXkk5CK7pPYkJ/giphy.gif" },
      { word: "pills", translation: "pastillas", example: "Take these pills twice a day.", pronunciation: "/pɪlz/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmI2N29nbXh3ODVzNHd6d3pkcTE3aWp4MDlpbTc3NWR5NXdhbGNyZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NsDgJPXkk5CK7pPYkJ/giphy.gif" },
      { word: "ambulance", translation: "ambulancia", example: "Always call an ambulance in an emergency.", pronunciation: "/ˈæmbjʊləns/", type: "noun", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2o0MzJxNzVjY2lxdTRwZDZjNTh6c3g3cHQ0dXltMTNuMGhzejJ3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3orieMQS2105J5Sn5K/giphy.gif" },
      { word: "hurt", translation: "doler / lastimar", example: "I have a stomachache and it really hurts.", pronunciation: "/hɜːrt/", type: "verb", image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGRybnF0M2F2anpwN3U0c25xOThhczRnYW5pOXl6cDF2dmNpMnU3aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13w5HmyiuaZ224/giphy.gif" },
      { word: "pulled a muscle", translation: "tirón muscular", example: "I pulled a muscle, so I need to apply heat to it.", pronunciation: "/pʊld ə ˈmʌsəl/", type: "phrase", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmd6cjZrdjJmeW1oaWF5aXl6cDRwbzQ1c29pZDM1bGh0YTN2cnF4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PRCES3DWLJz75UfxPL/giphy.gif" },
    ],
  },
];

export const getAllWords = () => {
  return themes.flatMap((theme) =>
    theme.words.map((word) => ({ ...word, themeId: theme.id, themeName: theme.name, themeColor: theme.color }))
  );
};