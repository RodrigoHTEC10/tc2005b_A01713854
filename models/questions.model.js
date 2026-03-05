/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Previous Labs model.
*/
const path = require('path');
const { readData, writeData } = require('../helpers/jsonStorage');

const QUESTIONS_PATH = path.join(__dirname, '..','data','questions.json');
const questions = readData(QUESTIONS_PATH);

module.exports = class Question{

    constructor(object){
        this.question = object.question;
        this.answer = object.answer;
        this.label = object.label;
    }

    save(){
        questions.push(this);
        writeData(QUESTIONS_PATH,questions);
    }

    static fetchAll(){
        return questions;
    }
}