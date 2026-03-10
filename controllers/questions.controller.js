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

exports.getQuestionsLab01 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 01",
            label: "lab01",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsLab03 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 03",
            label: "lab03",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsLab04 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 04",
            label: "lab04",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsLab05 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 05",
            label: "lab05",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsLab06 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 06",
            label: "lab06",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsLab11 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 11",
            label: "lab11",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsLab12 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 12",
            label: "lab12",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsLab14 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 14",
            label: "lab14",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};

exports.getQuestionsLab17 = (request,response,next)=>{
    Question.fetch(request.params.question_id).then(([rows, fieldData])=>{
        return response.render('questions.ejs',{
            questions: rows,
            title: "Laboratorio 17",
            label: "lab17",
            username: request.session.username || '',
            isLoggedIn: request.session.isLoggedIn || '',
        });
    }).catch((error)=>{
        console.log(error);
        response.redirect('/');
    });
};