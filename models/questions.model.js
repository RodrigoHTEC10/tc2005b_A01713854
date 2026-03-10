/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 8th, 2026
Title: Previous Labs model.
*/
const db = require('../util/database.js');

module.exports = class Question{

    constructor(q_question, q_answer, q_label){
        this.question = q_question;
        this.answer = q_answer;
        this.label = q_label;
    }

    async save(){
        return db.execute('INSERT INTO questions(username_id, question, answer, label, created_at) VALUES(?,?,?,?,NOW())',[1,this.question, this.answer, this.label]);
    }

    static fetchAll(){
        return db.execute('SELECT Q.question, Q.answer, Q.label FROM questions as Q');
    }

    static fetchOne(musical_id){
            return db.execute('SELECT Q.question, Q.answer, Q.label FROM questions as Q WHERE question_id=?',[musical_id]);
    }

    static fetch(musical_id){
        if(musical_id){
            return this.fetchOne(musical_id);
        }
        else{
            return this.fetchAll();
        }
    }

    static getQuestionsLab(label){
        return db.execute('SELECT Q.question, Q.answer, Q.label FROM questions as Q WHERE label=?',[label]);
    }
}