/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Abilities module.
*/

const express = require('express');
const router = express.Router();

router.get(`/list`,(request,response,next)=>{
    response.render('abilities.ejs');
    response.end;
})

module.exports = router;