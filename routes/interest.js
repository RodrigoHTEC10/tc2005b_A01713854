/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Interests module.
*/

const express = require('express');
const router = express.Router();

const {html_index, html_footer, html_header, html_interest} = require('../html/parts.js');

router.get(`/text`,(request,response,next)=>{
    response.send(html_header+html_index+html_interest+html_footer);
    response.end;
})


module.exports = router;