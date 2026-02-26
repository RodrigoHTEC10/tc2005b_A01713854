/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Preguntas module.
*/
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/lab01',(request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab01-02-03.html'));
})

router.get('/lab02',(request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab01-02-03.html'));
})

router.get('/lab03',(request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab01-02-03.html'));
})

router.get('/lab06',(request,response,next)=>{
    response.sendFile(path.join(__dirname,'..','public','html','lab06.html'));
})

module.exports = router;