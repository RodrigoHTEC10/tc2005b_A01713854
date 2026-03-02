/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Musicals module.
*/

const express = require('express');
const router = express.Router();
const musicalsController = require('../controlers/controller.musicals');

router.get('/list', musicalsController.getMusicalsList);
router.get('/form', musicalsController.getMusicalsForm);
router.post('/form',musicalsController.postMusicalsForm);

module.exports =router;