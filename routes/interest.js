/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Interests module.
*/

const express = require('express');
const router = express.Router();

router.get(`/text`,(request,response,next)=>{
    response.render('interest.ejs');
    response.end;
})


module.exports = router;