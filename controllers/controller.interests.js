/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Interests controller.
*/

exports.getInterestText = (request,response,next)=>{
    response.render('interest.ejs');
    response.end;
};