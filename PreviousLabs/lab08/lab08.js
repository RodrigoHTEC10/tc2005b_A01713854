/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 21st, 2026.
Title: Lab 08.
*/

/*Console Exercises*/

const { count } = require('console');
const fylesystem = require('fs');

    /* Una función que reciba un arreglo de números y devuelva su promedio. */

function average(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum+= parseInt(array[i]);
    }
    return sum/array.length;
}

let numbers = [1,5,8,15,86,89];
console.log(numbers);
console.log(average(numbers));


    /* Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs. */

function writeInTxt(string){
    fylesystem.writeFileSync('function.txt',string);
}

let string = "This is Lab 08"
console.log(string);
writeInTxt(string);
    /* Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node. */

    /*
    2620. Counter - LeetCode
    Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
    */

let call = 0;

var createCounter = function(n) {
    call = n-1;
    
    return function() {
        call = call+1;    
        return call;
    };
};

const counter = createCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());

/*Web App - Return other page*/

html = fylesystem.readFileSync('../lab 04/html/lab04.html');

const http = require('http');
const server = http.createServer((request,response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});
server.listen(4000);