const producto = '            Monitor 20 Pulgadas                  ';

console.log(producto);
console.log(producto.length);


//Eliminar del inicio los espacios:
console.log(producto.trimStart()); //Elimina los espacios del inicio
console.log(producto.trimEnd()); //Elimina los espacios del final

console.log(producto.trimStart().trimEnd());


console.log(producto.trim());//Elimina tanto los espacios tanto al principio como al final
