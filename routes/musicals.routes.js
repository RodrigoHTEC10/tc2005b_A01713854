/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Musicals routes.
*/

const express = require('express');
const router = express.Router();
const musicalsController = require('../controllers/musicals.controller');

router.get('/list', musicalsController.getMusicalsList);
router.get('/form', musicalsController.getMusicalsForm);
router.post('/form',musicalsController.postMusicalsForm);

module.exports =router;