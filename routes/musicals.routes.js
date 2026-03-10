/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Musicals routes.
*/

const express = require('express');
const router = express.Router();
const musicalsController = require('../controllers/musicals.controller');
const isAuth = require('../util/is-auth');

router.get('/list',isAuth, musicalsController.getMusicalsList);
router.get('/form',isAuth, musicalsController.getMusicalsForm);
router.post('/form',isAuth, musicalsController.postMusicalsForm);

module.exports =router;