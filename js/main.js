// Challenges data directly in the file
const challenges = {
  "A": "Trabalenguas con giro en cabeza y en estomago",
  "B": "Cantar boom tapita mm de korn",
  "C": "Tomarse un vaso de agua entero",
  "D": "Tomarse una foto con texto que escoge la persona anterior y estado del whatsapp / FB /Ig lo q más use v: #nohomo",
  "E": "cantar algo en ingles (10 - 20 seg)",
  "F": "contar un chiste de más de 20 seg",
  "G": "darle un abrazo a los que queden #nohomo",
  "H": "Narrar dramaticamente las siguientes acciones del que sigue v:",
  "I": "contar una historia corta en acento paisa",
  "J": "sentarse afuera del balcon tarareando hasta el siguiente jugador pase v;",
  "K": "morder limon con sal v:",
  "L": "masticar jalapeño por 5 seg",
  "M": "Milton le escoge un apodo por el resto del juego",
  "N": "manos en la cabeza hasta que salga",
  "Ñ": "descalzo hasta que salga",
  "O": "caminar agachado 5 pasos",
  "P": "dar 3 vueltas a la mesa",
  "Q": "Hacer como una gallina poniendo un huevo XD",
  "R": "ponerse algo verde encima de la cabeza por 5 seg",
  "S": "hacer 1 charada",
  "T": "Bailar como Pedro el escamoso XD",
  "U": "hacer la caminata lunar de MJ",
  "V": "subir una foto de alguien al facebook sin decir nada xD",
  "W": "Salir de la carcel si hace dos burpee, rifar si sale",
  "X": "Salir de la carcel si hace dos burpee, rifar si sale"
};

// Get form and handle submission
const form = document.getElementById("penance");
const input = document.getElementById("letter");
const label = document.getElementById("label");

form.onsubmit = (e) => {
  e.preventDefault(); // Prevent form from submitting
  
  const letter = input.value.toUpperCase();
  
  if (challenges[letter]) {
    label.textContent = challenges[letter];
  } else {
    label.textContent = 'Letra no válida. Por favor intenta otra vez.';
  }
  
  input.value = ''; // Clear input after submission
}; 