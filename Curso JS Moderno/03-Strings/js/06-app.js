const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto...

const texto = ' en Promoción'.repeat(2.4);
//si a .repeat le pasas un número que no es entero, este redondea el número, ejemplo, 2.4 lo redondea a 2
console.log(texto);
console.log(`${producto} ${texto} !!!`);

// .split permite dividir un string

const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuhar múscia, escribir, aprender a programar';
console.log(hobbies.split(","));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));