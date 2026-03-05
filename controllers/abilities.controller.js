/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Controller abilities.
*/

exports.getAbilitiesList = (request,response,next)=>{
    response.render('abilities.ejs',{
        username: request.session.username || '',
    });
    response.end;
};

