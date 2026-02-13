console.log("Saludos terricola.");
console.info("Esto es informacion");
console.warn("Esto es una advertencia");
console.error("Esto es un error");

//Unicamente se activa cuando la conficion interna es falsa.
console.assert(1==2);


//---------------variables, constantes ----------------
//Forma antigua de declarar variables no recomendada:
var videojuego_1 = "Minecraft";

//Forma moderna de declarar variables
let videojuego_2 = "Halo";

/*
var crea una variable que se mantiene en toda la clase donde fue creada.
led tiene una vida dentro de las ultimas { }.
*/

/*Por que es necesario usar constantes en JS*/
/* Por que es posible desde consola poder modificar las variables en JS, de modo que cualquier persona la puede modificar de la misma forma*/

var precio = 55; //Es modificable
const precio_definitivo = 60; //Constante y no puede ser modificable.