/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Musicals module.
*/

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fylesystem = require('fs');
const path = require('path');
const { readData, writeData } = require('../helpers/jsonStorage');

const MUSICALS_PATH = path.join(__dirname, '..','data','musicals.json');

//Array contenedor de musicales
const musicals = readData(MUSICALS_PATH);



router.get('/list', (request, response, next) => {
    fylesystem.writeFileSync('Musicals.txt',"");
    const file = fylesystem.createWriteStream('Musicals.txt',{flags: 'a'});
    
    response.render('musicals.ejs', {musicals: musicals});
    
    for(let i = 0; i<musicals.length; i++){
        file.write("Name="+musicals[i].name+"&Image="+musicals[i].image+"\n");
    }
    file.end();  

});

router.get('/form',(request,response,next)=>{
    response.render('form_musical.ejs');
})

router.post('/form',(request,response,next)=>{
    console.log(request.body);
    musicals.push(request.body);
    writeData(MUSICALS_PATH,musicals);
    response.redirect(303,'/musicals/list');
    response.end();
})

module.exports =router;