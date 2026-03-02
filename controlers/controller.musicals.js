/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Controller musicals.
*/

/*
Se genera un controlador por cada una de las rutas.
*/

const fylesystem = require('fs');
const path = require('path');
const { readData, writeData } = require('../helpers/jsonStorage');

//Camino a los datos de musicales
const MUSICALS_PATH = path.join(__dirname, '..','data','musicals.json');

//Array contenedor de musicales
const musicals = readData(MUSICALS_PATH);

//-----------------------------------------------------------------------------
//Metodos del controlador
//get musicals/list
exports.getMusicalsList = (request, response, next) => {
    fylesystem.writeFileSync('Musicals.txt',"");
    const file = fylesystem.createWriteStream('Musicals.txt',{flags: 'a'});
    
    response.render('musicals.ejs', {musicals: musicals});
    
    for(let i = 0; i<musicals.length; i++){
        file.write("Name="+musicals[i].name+"&Image="+musicals[i].image+"\n");
    }
    file.end();  
};

//*************************************************************/
//get musicals/form
exports.getMusicalsForm = (request,response,next)=>{
    response.render('form_musical.ejs');
};

//*************************************************************/
//post musicals/form
exports.postMusicalsForm = (request,response,next)=>{
    console.log(request.body);
    musicals.push(request.body);
    writeData(MUSICALS_PATH,musicals);
    response.redirect(303,'/musicals/list');
    response.end();
};