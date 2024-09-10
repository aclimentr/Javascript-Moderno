//METODOS Y PROPIEDADES DE LOS STRINGS

const producto = 'Monitor 20 Pulgadas';

document.querySelector(".contenido").innerHTML = producto;

//conocer la cantidad de letras de la cadena de texto (string)
console.log(producto.length);



console.log(producto.indexOf("cacatua"));// resultado -1 porque no existe
//en caso de que existiera nos diría la posición en la que se encuentra EJ:
console.log(producto.indexOf("Pulgadas"));

console.log(producto.includes("monitor"));
console.log(producto.includes("Monitor"));
console.log(producto.includes("Tablet"));


