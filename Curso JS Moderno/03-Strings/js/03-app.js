const producto = 'Monitor 20 Pulgadas';
const precio = ' 30 USD';

const total = producto + " Con un precio de: " + precio;

console.log(producto.concat(precio));
console.log(producto.concat(" En descuento"));

document.querySelector('.contenido').innerHTML = total;


console.log(producto + "Con un precio de:" + precio);

console.log("El producto " + producto + " tiene un precio de " + precio);
console.log("El producto " , producto , " tiene un precio de " , precio);

//TEMPLATE STRING:
console.log(`El producto ${producto} tiene un precio de: ${precio}`);  