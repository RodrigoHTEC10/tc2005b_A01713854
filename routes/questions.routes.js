/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Questions routes.
*/

const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions.controller');
const isAuth = require('../util/is-auth');

router.get('/form',isAuth,questionsController.getQuestionsForm);
router.post('/form',isAuth,questionsController.postQuestionsForm);
router.get('/all',isAuth,questionsController.getQuestionsAll);
router.get('/lab01',isAuth,questionsController.getQuestionsLab01);
router.get('/lab03',isAuth,questionsController.getQuestionsLab03);
router.get('/lab04',isAuth,questionsController.getQuestionsLab04);
router.get('/lab05',isAuth,questionsController.getQuestionsLab05);
router.get('/lab06',isAuth,questionsController.getQuestionsLab06);
router.get('/lab11',isAuth,questionsController.getQuestionsLab11);
router.get('/lab12',isAuth,questionsController.getQuestionsLab12);
router.get('/lab14',isAuth,questionsController.getQuestionsLab14);
router.get('/lab17',isAuth,questionsController.getQuestionsLab17);

module.exports =router;