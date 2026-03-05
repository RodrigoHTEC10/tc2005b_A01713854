/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Abilities routes.
*/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller.js');

router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);
router.get('/logout', userController.getLogout);

module.exports = router;