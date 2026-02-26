//Se pueden utilizar cuantos scripts se quiera dentro de un html.

//JS sirve para darle comportamiento a una pagina web.
/*Se ejecuta en la consola del navegador, de modo que a diferencia
de otros lenguajes de programación no se puede tener acceso a un sistema
de archivos externos. 
No hay medio de almacenamiento que no sea el que ya esta presente en el
html
*/


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
let tiene una vida dentro de las ultimas { }.
*/

{
    var minecraft = "5 estrellas";
    let halo = "4 estrellas";
}

console.log(minecraft);
//console.log(halo);

/*Por que es necesario usar constantes en JS?*/
/* Por que es posible desde consola poder modificar las variables en JS, de modo que cualquier persona la puede modificar de la misma forma*/

var precio = 55;                //Es modificable
const precio_definitivo = 60;   //Constante y no puede ser modificable.

//--------------- Interaccionnes con el usuario ---------------------

//Alert - Alerta que se carga al recargar la pagina web.
alert("Bienvenido al laboratorio!");

//Prompt - Pregunta al usuario, espera una respuesta del usuario.
const laboratorio = prompt("Que laboratorio desear ver?");
console.log("A continuación nos dirigimos a el laboratorio "+laboratorio);

//Confirm, necesita confirmacion 
const trabajar = confirm("Listo para trabajar?");



if(trabajar)
    console.log("A trabajar!");
else
    console.log("Ni modo");

//--------------------------- Funciones------------------------------

//Funcion tradicional
function is_precio(){

}

//Funciones modernas - Anonimas
()=>{}

//Es posible declarar funciones dentro de constantes. 
//Y por ello nos permite usar variables como si fueran una funcion.

const vidas = () => {
    console.log("Tienes 3 vidas");
}

vidas();

//---------------------- Arreglos --------------------------

/*Los arreglos si pueden ser modificados desde consola aunque sean declarados
como constante*/

const videojuegos = ["Minecraft"]; 
const jugadores = new Array(); 
//Esta almacenando la localidad de memoria del arreglo, no las localidades de memoria del contenido interno.

videojuegos.push("Doom"); //Agrega elementos a un array.
videojuegos[10] = "Zelda"; //En este caso deja espacios vacios desde donde habia elementos hasta el elemento declarado.
//Los espacios intermedios son indefinidos.


//---------------------- Arreglos Asociativos ---------------

//Los arreglos no son arreglos, son tablas de hash.
videojuegos["nintendo"]="Cese y Desista";


//---------------------- Ciclos -------------------------

for(let i = 0; i<videojuegos.length; i++){
    console.log(videojuegos[i]);
}

for(let juego in videojuegos){
    console.log(juego);
}

//---------------------- Objects ---------------------

const objeto = {};

const videojuego = {
    nombre: "Minecraft",
    genero: "Sandbox",
    plataforma: ["PC","Mobile","Xbox","PS","Nintendo"],
}


