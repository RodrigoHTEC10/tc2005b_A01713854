/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Previous Labs controller.
*/

exports.getLab01 = (request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab01-02-03.html'));
};

exports.getLab03 =(request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab01-02-03.html'));
};

exports.getLab04 =(request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab04.html'));
};

exports.getLab05 =(request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab05.html'));
};

exports.getLab06 =(request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab06.html'));
};
