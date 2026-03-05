/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 3rd, 2026
Title: Users Controller.
*/

exports.getLogin = (request, response, next)=>{
    response.render('login.ejs', {
        username: request.session.username || '',
    });
}

exports.postLogin = (request, response, next)=>{
    request.session.username = request.body.username;
    request.session.password = request.body.password;
    request.flash('success', 'El usuario ha ingresado correctamente.');
    response.redirect('/all');
}

exports.getLogout = (request, response, next)=>{
    request.session.destroy(() => {
        response.redirect('/all'); //Este código se ejecuta cuando la sesión se elimina.
    });
}