/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Questions controller.
*/
const Question = require('../models/questions.model');

exports.getQuestionsForm = (request,response,next)=>{
    response.render('form_question.ejs', {
        username: request.session.username || '',
    });
};

exports.postQuestionsForm = (request,response,next)=>{
    console.log(request.body);
    const question = new Question(request.body);
    // console.log(question.question);
    // console.log(question.answer);
    // console.log(question.label);
    question.save();
    response.redirect(303,'/questions/all');
    response.end();
};

exports.getQuestionsAll = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorios",
        label: "all",
        username: request.session.username || '',
    });
};

exports.getQuestionsLab01 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 01",
        label: "lab01",
        username: request.session.username || '',
    });
};

exports.getQuestionsLab03 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 03",
        label: "lab03",
        username: request.session.username || '',
    });
};

exports.getQuestionsLab04 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 04",
        label: "lab04",
        username: request.session.username || '',
    });
};

exports.getQuestionsLab05 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 05",
        label: "lab05",
        username: request.session.username || '',
    });
};

exports.getQuestionsLab06 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 06",
        label: "lab06",
        username: request.session.username || '',
    });
};

exports.getQuestionsLab11 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 11",
        label: "lab11",
        username: request.session.username || '',
    });
};

exports.getQuestionsLab12 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 12",
        label: "lab12",
        username: request.session.username || '',
    });
};

exports.getQuestionsLab14 = (request,response,next)=>{
    response.render('questions.ejs',{
        questions: Question.fetchAll(),
        title: "Laboratorio 14",
        label: "lab14",
        username: request.session.username || '',
    });
};