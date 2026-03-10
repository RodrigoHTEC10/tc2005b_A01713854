/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Abilities routes.
*/

const express = require('express');
const router = express.Router();
const abilitiesController = require('../controllers/abilities.controller');
const isAuth = require('../util/is-auth');

router.get(`/list`,isAuth, abilitiesController.getAbilitiesList);

module.exports = router;