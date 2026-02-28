/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 27th, 2026
Title: Help Module: jsonStorage
*/

const filesystem = require('fs');
const path = require('path');

function readData(path){
    return JSON.parse(filesystem.readFileSync(path,'utf8'));
}

function writeData(path, data){
    const newData = JSON.stringify(data,null,2);
    filesystem.writeFileSync(path, newData);
}

module.exports={readData, writeData};