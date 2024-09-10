const producto = "Monitor de 24 pulgadas <br/>";

const producto2 = String('Monitor de 28 pulgadas <br/>');

const producto3 = new String('Monitor de 27 pulgadas');

console.log(producto, producto2, producto3);

document.querySelector(".contenido").innerHTML = producto + producto2 + producto3;