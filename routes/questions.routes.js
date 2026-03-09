/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Questions routes.
*/

const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions.controller');

router.get('/form',questionsController.getQuestionsForm);
router.post('/form',questionsController.postQuestionsForm);
router.get('/all',questionsController.getQuestionsAll);
router.get('/lab01',questionsController.getQuestionsLab01);
router.get('/lab03',questionsController.getQuestionsLab03);
router.get('/lab04',questionsController.getQuestionsLab04);
router.get('/lab05',questionsController.getQuestionsLab05);
router.get('/lab06',questionsController.getQuestionsLab06);
router.get('/lab11',questionsController.getQuestionsLab11);
router.get('/lab12',questionsController.getQuestionsLab12);
router.get('/lab14',questionsController.getQuestionsLab14);
router.get('/lab17',questionsController.getQuestionsLab17);

module.exports =router;