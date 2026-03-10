/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Controller abilities.
*/

exports.getAbilitiesList = (request,response,next)=>{
    response.render('abilities.ejs',{
        privileges:request.session.privileges || [],
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || '',
    });
    response.end;
};

