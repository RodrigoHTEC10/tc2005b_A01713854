/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Musicals routes.
*/

const express = require('express');
const router = express.Router();
const musicalsController = require('../controllers/musicals.controller');
const isAuth = require('../util/is-auth');
const createMusical = require('../util/privileges/create-musical');
const visualMusical = require('../util/privileges/visualize-musicals');

router.get('/list',isAuth,visualMusical, musicalsController.getMusicalsList);
router.get('/form',isAuth,createMusical, musicalsController.getMusicalsForm);
router.post('/form',isAuth,createMusical, musicalsController.postMusicalsForm);

module.exports =router;