/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Abilities routes.
*/

const express = require('express');
const router = express.Router();
const recordController = require('../controllers/record.controller.js');
const isAuth = require('../util/is-auth');
const specialUser = require('../util/special-user.js');

router.get('/all',isAuth,specialUser,recordController.getRecords);


module.exports = router;