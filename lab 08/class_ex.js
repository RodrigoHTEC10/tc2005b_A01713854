console.log("hola desde node!");

//fs se refiere a file system.

const fylesystem = require('fs');

/*Node funciona de forma asincronica.
Lo mas lento de una computadora es traer informacion o trabajar desde el disco duro.
Cuando se desea acceder al sistema de archivo conviene que eso se ejecute de forma asincronica de modo que no se bloquee el resto del proceso.*/

fylesystem.writeFileSync('hola.txt','Hola desde node');
html = fylesystem.readFileSync('../lab 04/html/lab04.html');


const arreglo = [1000, 60, 70, 80, 200, 589, 700, 350];

for(let item of arreglo){
    setTimeout(()=> {
        console.log(item);
    }, item);
}

const imprimir = (valor) =>{
    console.log(valor);
}


setTimeout(()=>{
    console.log("Juanito se fue a la guerra, que dolor, que dolor, que pena");
},1000)

//El servidor web se crea a partir del objeto https, se declara que se escucha y se reponde.
const http = require('http');
const server = http.createServer((request,response) => {
    //console.log(request);
    console.log(request.url);

    //Escritura de la respuesta como un contenido del tipo html
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

//Una vez declarado el puerto a traves del cual el servidor va a recibir peticiones se completa el diseño del server.
server.listen(3000);