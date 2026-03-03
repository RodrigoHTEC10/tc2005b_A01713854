/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Abilities routes.
*/

const express = require('express');
const router = express.Router();
const abilitiesController = require('../controllers/controller.abilities');

router.get(`/list`, abilitiesController.getAbilitiesList);

module.exports = router;