/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Previous Labs routes.
*/

const express = require('express');
const router = express.Router();
const prevLabsController = require('../controllers/previousLabs.controller');
const isAuth = require('../util/is-auth');

router.get('/lab01',isAuth,prevLabsController.getLab01);
router.get('/lab03',isAuth,prevLabsController.getLab03);
router.get('/lab04',isAuth,prevLabsController.getLab04);
router.get('/lab05',isAuth,prevLabsController.getLab05);
router.get('/lab06',isAuth,prevLabsController.getLab06);

module.exports = router;