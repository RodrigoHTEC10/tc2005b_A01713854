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

router.get('/form',isAuth,visualQuestion,createQuestion,questionsController.getQuestionsForm);
router.post('/form',isAuth,visualQuestion,createQuestion,questionsController.postQuestionsForm);
router.get('/all',isAuth,visualQuestion,questionsController.getQuestionsAll);
router.get('/:label',isAuth,visualQuestion,questionsController.getQuestionsDynamically);

module.exports =router;