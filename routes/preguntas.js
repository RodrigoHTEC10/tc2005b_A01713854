/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Preguntas module.
*/
const express = require('express');
const router = express.Router();

const {html_index, html_footer, html_header, html_q_lab01, html_q_lab03, html_q_lab05, html_ref} = require('../html/parts.js');

router.get('/lab01',(request,response,next)=>{
    response.send(html_header+html_index+html_q_lab01+html_ref+html_footer);
    response.end;
})

router.get('/lab03',(request,response,next)=>{
    response.send(html_header+html_index+html_q_lab03+html_ref+html_footer);
    response.end;
})

router.get('/lab05',(request,response,next)=>{
    response.send(html_header+html_index+html_q_lab05+html_ref+html_footer);
    response.end;
})

module.exports = router;