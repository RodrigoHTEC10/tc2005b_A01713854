/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Interests routes.
*/

const express = require('express');
const router = express.Router();
const interestController = require('../controllers/interests.controller');
const isAuth = require('../util/is-auth');

router.get(`/text`,isAuth,interestController.getInterestText);


module.exports = router;