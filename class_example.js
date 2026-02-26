const express = require('express');
/*Toda la configuracion dentro del servidor web esta almacenada dentro 
de app.*/
const app = express();


/*bodyParser installation*/
const bodyParser = require('body-parser');
/*Para que bodyParser funcione para toda la aplicacion*/
app.use(bodyParser.urlencoded({extended: false}));

/*bodyParser crea un objeto body que se obtiene directamente
a traves de request.body*/


//Middleware
/*
Software Intermedio.
Nuestra aplicacion web esta en la variable app.
A esta variable se le pueden agregar capas siempre que se le haga una
peticion 
al servidor.
Para registrar un nuevo middleware se usa la funcion: use.

app.use((request, response, next) => {});
-> next indica que se vaya al siguiente middleware.

Esto permite hacer un registro completo de una nueva funcionalidad 
dentro de unicamente el servidor a traves de middlewares.

El orden en que se declaran los middlewares es altamente importante,
ya que indican*/

app.use((request, response, next) => {
    console.log('Middleware!');
    next(); 
    //Le permite a la petición avanzar hacia el siguiente middleware
});

/*
Uso de las Rutas
Uso del Body Parser

/new es una direccion regular, todas las partes de la aplicacion que
tengan "/new" al inicio de su ruta seran aplicados.
*/

/*
Para registrar un middleware que obtenga y mande datos se puede usar:
app.post();
app.get();
app.use(); El middleware siempre se aplica.
*/

app.get('/form',(request,response,next)=>{ //Rutas
    response.send('Aqui vamos a registrar videojuegos: '); 
});

app.post('/form',(request,response,next)=>{ //Rutas
    console.log(request.body); //BodyParser
    musicals.push(request.body);
    response.send('Aqui vamos a obtener videojuegos: '); 
});


app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.listen(3000);