/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Questions routes.
*/

const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions.controller');
const isAuth = require('../util/is-auth');
const visualQuestion = require('../util/privileges/visualize-questions');
const createQuestion = require('../util/privileges/create-question');
const specialUser = require('../util/special-user');

router.get('/form',isAuth,specialUser,visualQuestion,createQuestion,questionsController.getQuestionsForm);
router.post('/form',isAuth,specialUser,visualQuestion,createQuestion,questionsController.postQuestionsForm);
router.get('/all',isAuth,specialUser,visualQuestion,questionsController.getQuestionsAll);
router.get('/id/:question_id',isAuth,specialUser,visualQuestion,questionsController.getQuestionByID);
router.get('/edit/:question_id',isAuth,specialUser,visualQuestion,createQuestion,questionsController.getQuestionEditionForm);
router.post('/edit',isAuth,specialUser,visualQuestion,createQuestion,questionsController.postQuestionEdition);
router.get('/delete/:question_id',isAuth,specialUser,visualQuestion,createQuestion,questionsController.getDeleteQuestion);
router.get('/:label',isAuth,specialUser,visualQuestion,questionsController.getQuestionsDynamically);

module.exports =router;