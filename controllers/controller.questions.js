/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Questions controller.
*/

const Question = require('../models/questions.model');

exports.getQuestionsForm = (request,response,next)=>{
    response.render('form_question.ejs');
};

exports.postQuestionsForm = (request,response,next)=>{
    console.log(request.body);
    const question = new Question(response.body);
    question.save();
    response.redirect(303,'/questions/all');
    response.end();
};

exports.getQuestionsAll = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorios",
        label: "all",
    });
};

exports.getQuestionsLab01 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 01",
        label: "lab01",
    });
};

exports.getQuestionsLab03 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 03",
        label: "lab03",
    });
};

exports.getQuestionsLab04 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 04",
        label: "lab04",
    });
};

exports.getQuestionsLab05 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 05",
        label: "lab05",
    });
};

exports.getQuestionsLab06 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 06",
        label: "lab06",
    });
};

exports.getQuestionsLab11 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 11",
        label: "lab11",
    });
};

exports.getQuestionsLab12 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 12",
        label: "lab12",
    });
};

exports.getQuestionsLab13 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 13",
        label: "lab13",
    });
};