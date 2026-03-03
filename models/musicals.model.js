/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: March 2nd, 2026
Title: Previous Labs model.
*/

const fylesystem = require('fs');
const path = require('path');
const { readData, writeData } = require('../helpers/jsonStorage');

//Camino a los datos de musicales
const MUSICALS_PATH = path.join(__dirname, '..','data','musicals.json');

//Array contenedor de musicales
const musicals = readData(MUSICALS_PATH);

module.exports = class Musical{

    constructor(object){
        this.name = object.name;
        this.image = object.image;
    }

    save(){
        musicals.push(this);
        writeData(MUSICALS_PATH,musicals);
    }

    static fetchAll(){
        return musicals;
    }
}