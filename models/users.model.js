/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 8th, 2026
Title: Previous Labs model.
*/
const bcrypt = require('bcrypt');
const db = require('../util/database');
const { response } = require('express');

module.exports = class User{

    constructor(u_username, u_name, u_password){
        this.username = u_username;
        this.name = u_name;
        this.password = u_password;
    }

    async save(){
        bcrypt.hash(this.password, 12).then((password_cifrado)=>{
            return db.execute('INSERT INTO users(username, password, nombre) Values(?,?,?)',
                [this.username,password_cifrado,this.name]);
        })
        .catch((error)=>{
            console.log(error);
            return response.redirect('/');
        });
        console.log("All saved");

    }

    static fetchOne(username){
        return db.execute('SELECT * FROM users WHERE username=?',[username]);
    }

    static getPrivileges(username){
        return db.execute('SELECT p.name FROM privilege as p INNER JOIN tiene as t ON t.privilege_id=p.privilege_id INNER JOIN roles as r ON r.role_id = t.role_id INNER JOIN otorga as o ON o.role_id = r.role_id INNER JOIN users as u ON u.username_id=o.username_id WHERE u.username = ?',[username]);
    }
}