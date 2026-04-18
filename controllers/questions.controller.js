/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Questions controller.
*/
const { response } = require('express');
const Question = require('../models/questions.model');

exports.getQuestionsForm = (request,response,next)=>{
    response.render('form_question.ejs', {
        question: '',
        edition: false,
        csrfToken: request.csrfToken(),
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || '',
        privileges:request.session.privileges || [],
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
            privileges:request.session.privileges || [],
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsDynamically = (request,response,next)=>{
    let label = request.params.label;
    Question.getQuestionsLab(label).then(([questions,fieldData])=>{
        console.log(`QUESTIONS: ${questions[0].length}`);
        return response.render('questions.ejs',{
            questions: questions[0],
            alt_text: questions[0].length>0 ? null : 'This lab does not have any question',
            title: "Laboratorio "+label.substr(label.length - 2),
            label: label,
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
            privileges:request.session.privileges || [],
        });
    })
    .catch((error)=>{
        console.log(error);
        response.redirect('/');
    })
}

exports.getQuestionByID = (request,response,next)=>{
    let id = request.params.question_id;
    Question.fetchOne(id).then(([questions,fieldData])=>{
        return response.render('questions.ejs',{
            questions: questions,
            title: "Question No. "+id,
            label:'',
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
            privileges:request.session.privileges || [],
        });
    })
    .catch((error)=>{
        console.log(error);
        response.redirect('/');
    })
}

exports.getQuestionEditionForm = (request, response, next) =>{
    let id = request.params.question_id;
    Question.fetchOne(id).then(([questions,fieldData])=>{
        console.log(questions[0]);
        return response.render('form_question.ejs',{
            csrfToken: request.csrfToken(),
            edition: true,
            question: questions[0],
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
            privileges:request.session.privileges || [],
        });
    })
    .catch((error)=>{
        console.log(error);
        response.redirect('/');
    })
}


exports.postQuestionEdition = (request,response,next)=>{
    Question.editQuestion(request.body.question_id, request.body.question, request.body.answer, request.body.label)
    .then(()=>{
        response.redirect(303,'/questions/all');
    })
    .catch((error)=>{
        console.log(error);
        response.redirect('/');
    })
};

exports.getDeleteQuestion = (request,response,next)=>{
    Question.deleteQuestion(request.params.question_id)
    .then(()=>{
        response.redirect(303,'/questions/all');
    })
    .catch((error)=>{
        console.log(error);
        response.redirect('/');
    })
};