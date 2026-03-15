/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Interests routes.
*/

const express = require('express');
const router = express.Router();
const interestController = require('../controllers/interests.controller');
const isAuth = require('../util/is-auth');
const specialUser = require('../util/special-user');


router.get(`/text`,isAuth,specialUser,interestController.getInterestText);


module.exports = router;