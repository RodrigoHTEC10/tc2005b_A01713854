console.log("hola desde node!");

//fs se refiere a file system.

const fylesystem = require('fs');

/*Node funciona de forma asincronica.
Lo mas lento de una computadora es traer informacion o trabajar desde el disco duro.
Cuando se desea acceder al sistema de archivo conviene que eso se ejecute de forma asincronica de modo que no se bloquee el resto del proceso.*/

fylesystem.writeFileSync('hola.txt','Hola desde node');

