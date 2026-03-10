/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 8th, 2026
Title: Previous Labs model.
*/
const db = require('../util/database');

module.exports = class Musical{

    constructor(m_name, m_image){
        this.name = m_name;
        this.image = m_image;
    }

    async save(){
        return db.execute('INSERT INTO musicals(username_id,name,image,created_at) VALUES(?,?,?,NOW())', [1,this.name, this.image]);
    }

    static fetchAll(){
        return db.execute('SELECT M.name,M.image FROM musicals as M');
    }

    static fetchOne(musical_id){
        return db.execute('SELECT M.name,M.image FROM musicals as M WHERE M.musical_id=?',[musical_id]);
    }

    static fetch(musical_id){
        if(musical_id){
            return this.fetchOne(musical_id);
        }
        else{
            return this.fetchAll();
        }
    }
}