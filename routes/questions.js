/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Preguntas module.
*/
const express = require('express');
const router = express.Router();
const path = require('path');
const { readData, writeData } = require('../helpers/jsonStorage');

const QUESTIONS_PATH = path.join(__dirname, '..','data','questions.json');
const questions = readData(QUESTIONS_PATH);


router.get('/form',(request,response,next)=>{
    response.render('form_question.ejs');
})

router.post('/form',(request,response,next)=>{
    console.log(request.body);
    questions.push(request.body);
    writeData(QUESTIONS_PATH,questions);
    response.redirect(303,'/questions/all');
    response.end();
})


router.get('/all',(request,response,next)=>{
    response.render('questions.ejs',{
        questions: questions,
        title: "Laboratorios",
        label: "all",
    });
})

router.get('/lab01',(request,response,next)=>{
    response.render('questions.ejs',{
        questions: questions,
        title: "Laboratorio 01",
        label: "lab01",
    });
})

router.get('/lab03',(request,response,next)=>{
    response.render('questions.ejs',{
        questions: questions,
        title: "Laboratorio 03",
        label: "lab03",
    });
})

router.get('/lab04',(request,response,next)=>{
    response.render('questions.ejs',{
        questions: questions,
        title: "Laboratorio 04",
        label: "lab04",
    });
})

router.get('/lab06',(request,response,next)=>{
    response.render('questions.ejs',{
        questions: questions,
        title: "Laboratorio 06",
        label: "lab06",
    });
})

router.get('/lab11',(request,response,next)=>{
    response.render('questions.ejs',{
        questions: questions,
        title: "Laboratorio 11",
        label: "lab11",
    });
})

router.get('/lab12',(request,response,next)=>{
    response.render('questions.ejs',{
        questions: questions,
        title: "Laboratorio 12",
        label: "lab12",
    });
})


module.exports =router;