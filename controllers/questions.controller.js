/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Questions controller.
*/
const Question = require('../models/questions.model');

exports.getQuestionsForm = (request,response,next)=>{
    response.render('form_question.ejs', {
        csrfToken: request.csrfToken(),
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || '',
    });
};

exports.postQuestionsForm = (request,response,next)=>{
    console.log(request.body);
    const question = new Question(request.body.question, request.body.answer, request.body.label);
    question.save().then(()=>{
        response.redirect(303,'/questions/all');
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    })
};

exports.getQuestionsAll = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorios",
            label: "all",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsDynamically = (request,response,next)=>{
    console.log(request.params.label);
    let label = request.params.label;
    Question.getQuestionsLab(label).then(([questions,fieldData])=>{
        return response.render('questions.ejs',{
            questions: questions,
            title: "Laboratorio "+label.substr(label.length - 2),
            label: label,
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    })
    .catch((error)=>{
        console.log(error);
        response.redirect('/');
    })
}