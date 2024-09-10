//inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";

//El valor de una variable se puede reasignar
producto = "Monitor de 19 pulgadas";

//Js es un lenguaje de tipo dinámico, no se especifica tipo de dato
producto = 30;

//Se pueden inicializar sin valor y asignarlo después
var disponible;

disponible = true;

//se acaba un producto:
disponible = false;

//Iniciar múltiples variablesç
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

//Las variables no pueden iniciar con números
var 99dias;
var dias99;

var 01_;
var _01;
var _usuario;
var __usuario;


var nombreProducto; //ESTO SE LLAMA CAMELCASE
var nombre_producto_; //ESTO SE LLAMA UNDERSCORE O SNAKE
var NombreProducto; //ESTO SE LLAMA PASCALCASE

document.querySelector(".contenido").innerHTML = producto + marca;