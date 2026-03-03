/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Interests routes.
*/

const express = require('express');
const router = express.Router();
const interestController = require('../controllers/controller.interests');

router.get(`/text`,interestController.getInterestText);


module.exports = router;