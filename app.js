/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 8th, 2026
Title: Lab 11: Express - Main file.
*/
const express = require('express');
const app = express();

/*Establece el body parser. Permite leer facilmente del cuerpo de un form.*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

/* Hacer una carpeta estatica*/
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


/* Establecer el motor grafico de la aplicacion web como ejs */
app.set('view_engine','ejs'); //Establece el motor de visualizacion
app.set('views','views');     //Establece el directorio del motor de visualizacion.

/*Instalacion de express-session*/
const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false,              //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false,   //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

/*Instalacion de csurf*/
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 


const isAuth = require('./util/is-auth.js');

/*Instalacion del connect-flash*/
const flash = require('connect-flash');
app.use(flash());


/*Instalacion del cookie-parser*/
const cookieParser = require('cookie-parser');
app.use(cookieParser());

/*Import of the database models*/
const Musical = require('./models/musicals.model.js');
const Question = require('./models/questions.model.js');

/*EJS son archivos que contienen codigo HTML per permite escribir codigo JS, usando %.
Para desplegar el template de EJS, lo hacemos con el metodo render, y como argumento podemos el nombre del archivo ejs.
Dentro de este archivo se puede definir codigo JS que se puede ejecutar en el servidor o en el cliente.
En este caso sera unicamente del servidor.*/

/*
Available routes:
/users/login
/users/logout
*/
app.use('/users',require('./routes/user.routes.js'));

/*
Available routes:
/musicals/list
/musicals/form (GET & POST)
*/
app.use('/musicals', require('./routes/musicals.routes.js'));
/*
Available routes:
/questions/lab01
/questions/lab03
/questions/lab05
*/
app.use('/questions', require('./routes/questions.routes.js'));
/*
Available routes:
/interest/text
*/
app.use('/interest', require('./routes/interest.routes.js'));
/*
Available routes:
/abilities/list
*/
app.use('/abilities', require('./routes/abilities.routes.js'));


/*
Available routes:
/prev/lab01
/prev/lab03
/prev/lab04
/prev/lab05
/prev/lab06
*/
app.use('/prev', require('./routes/previousLabs.routes.js'));

/* 
Any other route
*/
app.use('/all',isAuth,(request, response, next)=>{
    
    Promise.all([
        Musical.fetchAll(),
        Question.fetchAll(),
    ])
    .then((results) => {

        const musicals = results[0][0];
        const questions = results[1][0];

        return response.render('all.ejs',{
            questions:questions,
            musicals:musicals,
            title: "Laboratorios",
            label:"all",
            username: request.session.username || '',
            success: request.flash('success'),
            isLoggedIn: request.session.isLoggedIn || '',
            privileges:request.session.privileges || [],
        });
    })
    .catch((error) => {
        console.log(error);
        response.redirect('/');
    });

    let visits = parseInt(request.cookies.visits) || 0;
    visits = visits+1;
    response.setHeader('Set-Cookie',`visits=${visits}; {httpOnly:true, secure:true}`);
    console.log(`You have accesed the main webpage: ${visits} time(s).`)

})


app.use((request,respose,next)=>{
    respose.status(404).send("Error 404");
    respose.end();
})

app.listen(3000);