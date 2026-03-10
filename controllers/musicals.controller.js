/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 8th, 2026
Title: Controller musicals.
*/

/*
Se genera un controlador por cada una de las rutas.
*/
const Musical = require('../models/musicals.model')

//-----------------------------------------------------------------------------
//Metodos del controlador
//get musicals/list
exports.getMusicalsList = (request, response, next) => {

    Musical.fetch(request.params.musical_id).then(([rows,fieldData]) =>{
        return response.render('musicals.ejs',{
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
            musicals: rows,
        });

    }).catch((error) => {
        console.log(error);
        response.redirect('/');
    });      
};

//*************************************************************/
//get musicals/form
exports.getMusicalsForm = (request,response,next)=>{
    response.render('form_musical.ejs', {
        csrfToken: request.csrfToken(),
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || '',
    });
};

//*************************************************************/
//post musicals/form
exports.postMusicalsForm = (request,response,next)=>{
    console.log(request.body);
    const musical = new Musical(request.body.name, request.body.image);

    musical.save().then(()=>{
        response.setHeader('Set-Cookie',`ultimo_musical=${musical.name}; Secure`);
        response.redirect(303,'/musicals/list');

    }).catch((error) =>{
        console.log(error);
        response.redirect('/');
    });
};