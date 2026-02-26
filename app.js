/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Lab 11: Express - Main file.
*/
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

/* Hacer una carpeta estatica*/
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view_engine','ejs'); //Establece el motor de visualizacion
app.set('views','views');     //Establece el directorio del motor de visualizacion.

/*
EJS son archivos que contienen codigo HTML per permite escribir codigo JS, usando %.
Para desplegar el template de EJS, lo hacemos con el metodo render, y como argumento podemos el nombre del archivo ejs.
Dentro de este archivo se puede definir codigo JS que se puede ejecutar en el servidor o en el cliente.
En este caso sera unicamente del servidor.
*/

const {html_footer, html_header} = require('./html/parts.js');

/*
Available routes:
/musicals/list
/musicals/form (GET & POST)
*/
app.use('/musicals', require('./routes/musicals.js'));
/*
Available routes:
/questions/lab01
/questions/lab03
/questions/lab05
*/
app.use('/questions', require('./routes/preguntas.js'));
/*
Available routes:
/interest/text
*/
app.use('/interest', require('./routes/interest.js'));
/*
Available routes:
/abilities/list
*/
app.use('/abilities', require('./routes/abilities.js'));


//Lab 12
app.use('/old', require('./routes/sendFile.js'));

/* 
Any other route
*/
app.use((request,respose,next)=>{
    respose.status(404).send(html_header+"Error 404"+html_footer);
    respose.end();
})

app.listen(3000);