/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 3rd, 2026
Title: Users Controller.
*/
const User = require('../models/users.model.js');
const bcrypt = require('bcrypt');

exports.getSignin=(request, response, next) => {
    response.render('signin.ejs', {
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn || '',
        username: request.session.username || '',
    });
}

exports.postSignin=(request, response, next) => {
    const usuario = new User(request.body.username, request.body.name, request.body.password);
    usuario.getSignIn().then(()=>{
            return response.redirect('/users/login');
    }).catch((error)=>{
        console.log(error);
        return response.redirect('/');
    });    
};


exports.getLogin = (request, response, next)=>{
    const error = request.session.error || '';
    request.session.error='';
    response.render('login.ejs', {
        csrfToken: request.csrfToken(),
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || '',
        error:error,
        specialUser:process.env.SPECIAL_USER,
    });
}

exports.postLogin = (request, response, next)=>{
    User.fetchOne(request.body.username).then(([rows,fieldData])=>{
        if(rows.length<1){
            request.session.error = 'Usuario y/o password no coinciden';
            return response.redirect('/users/login');
        }else{
            bcrypt.compare(request.body.password, rows[0].password).then((doMatch)=>{
                if(doMatch){
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;

                    if(request.session.username == process.env.SPECIAL_USER){
                        request.session.isSpecialUser = true;
                    }
                    User.getPrivileges(request.body.username).then(([privileges, fieldData])=>{
                        request.session.privileges = privileges;                        
                        return request.session.save((error) => {
                            return response.redirect('/all');
                        });
                        
                    }).catch((error)=>{
                        console.log(error);
                        return response.redirect('/');
                    })
                } else {
                    request.session.error = 'Usuario y/o password no coinciden';
                    return response.redirect('/users/login');
                }
            })
            .catch((error)=>{
                console.log(error);
                return response.redirect('/');
            });
        };
    })
    .catch((error)=>{
        console.log(error);
        return response.redirect('/');
    });
}

exports.getLogout = (request, response, next)=>{
    request.session.destroy(() => {
        return response.redirect('/all');
    });
}