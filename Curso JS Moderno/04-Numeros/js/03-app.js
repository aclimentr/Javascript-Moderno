let resultado;

//PI:
resultado = Math.PI;

//Redondear

    // MATH.ROUND

    resultado = Math.round(2.8);//redondea hacia arriba
    resultado = Math.round(2.2);//redondea hacia abajo
    resultado = Math.round(2.6);//redondea hacia arriba
    resultado = Math.round(2.5);//redondea hacia arriba
    resultado = Math.round(2.4);//redondea hacia abajo

//Redondear hacia arriba: 

    // MATH.CEIL

    resultado = Math.ceil(2.5);//redondea hacia arriba
    resultado = Math.ceil(2.1);//redondea hacia arriba

//Redondear hacia abajo:

    // MATH.FLOOR

    resultado = Math.floor(2.9);//redondea hacia abajo

//Raiz Cuadrada:

    //MATH.SQRT
    resultado = Math.sqrt(144);

//Valor absoluto:

    // MATH.ABS
    resultado = Math.abs(-500);//ignora el negativo y se trae solo el valor absoluto

//Potencia:

    // MATH.POW 
    resultado = Math.pow(2, 3);//hace la potencia de una operacion, ejemplo:
                            //2 elevado a la potencia de 3 = 2 * 2 * 2 = 8

//Minimo:

    //MATH.MIN
    resultado = Math.min(3, 5, 2, 6, -3);//recoge el número más bajo de los números que le pasamos

//Máximo:

    //MATH.MAX
    resultado = Math.max(3, 5, 2, 6, 20, -3);//recoge el número más alto de los números que le pasamos

//Aleatorio:

    //MATH.RANDOM
    resultado = Math.random() * 20;
    //Aleatorio dentro de un rango de números
    resultado = Math.floor(Math.random() * 30);
console.log(resultado);