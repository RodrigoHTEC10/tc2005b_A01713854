/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Lab 11: Express - Main file.
*/
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

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

/* 
Any other route
*/
app.use((request,respose,next)=>{
    respose.send(html_header+"Error 404"+html_footer);
    respose.end();
})

app.listen(3000);