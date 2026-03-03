/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Previous Labs routes.
*/

const express = require('express');
const path = require('path');
const router = express.Router();
const prevLabsController = require('../controllers/controller.previousLabs');

router.get('/lab01',prevLabsController.getLab01);
router.get('/lab03',prevLabsController.getLab03);
router.get('/lab04',prevLabsController.getLab04);
router.get('/lab05',prevLabsController.getLab05);
router.get('/lab06',prevLabsController.getLab06);

module.exports = router;