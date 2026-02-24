/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 23rd, 2026
Title: Lab 10: Rutas y formas
*/

//-----------------------------------------------------------------
//Manejo de diversos apartados del HTML

//Secciones sin modificacion

const html_header =`<!DOCTYPE html>
<html data-theme="dark">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lab 05 [A01713854]</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css">
    </head>


    <body>
    <div class="container">
        <div class="block">
            <h1 class="title has-text-centered">Laboratorios - Rodrigo Hurtado </h1>
        </div>
        
    <div class="box has-text-centered">
            <p><strong>Datos de contacto:</strong></p>
            <div class="element">
                <p><strong>Nombre:</strong> Rodrigo Alejandro Hurtado Cortés</p>
            </div>
            <div class="element">
                <p><strong> Matricula:</strong> A01713854</p>
            </div>
            <div class="element">
                <p><strong>Correo electrónico escolar:</strong> a01713854@tec.mx</p>
            </div>
            <div class="element">
                <p id="last_email"> <strong>Correo electrónico personal:</strong> hurtadorodrigo00@gmail.com</p>
            </div> 
    </div>
        `;


const html_footer = `    
<footer>
        <p> Editor de HTML empleado: <a href="https://code.visualstudio.com/">Visual Studio Code</a></p>
    </footer>
    </body>
</html>`;


const html_index = `
    <section>    
    <div>
        
        <div class="block is-flex is-justify-content-center"> 
            <a href="/form"><button class="button is-primary">Nuevo Boton</button></a>
        </div>

        <div class="block">
            <p>
                Bienvenidos a la practica del laboratorio 1 de la materia de <strong>Construcción de Software y Toma de Decisiones.</strong>
            </p>
        </div>
    </div>
    </section>`;


const html_abilities = `    
    <section class="section">
        <div class="container">
            <header>
                <h2 class=" subtitle">Habilidades </h2>
            </header>
            <div class="element">
                <p>Lenguajes de programacion: C++, Java y Python.</p>
                <p>Conocimiento básico: R, MATLAB, Flutter, SQL.</p>
                <p>Manejo de control de versiones: GitHub.</p>
                <p>Planeación de requisitos de software.</p>
                <p>Organización y planeación de bases de datos relacionales.</p>
                <p>Comunicación con el cliente.</p>
            </div>
        </div>
    </section>`


//-----------------------------------------------------------------
//Forma a definir

const html_form = `
    <form action="/form" method="POST">
    <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
        <input id="name" name="Name" class="input" type="text" placeholder="e.g Ride the Cyclone: The Musical">
        </div>
    </div>

    <div class="field">
        <label for="image" class="label">Image</label>
        <div class="control">
        <input id="image" name="Image" class="input" type="text" placeholder="e.g. https://static.wikia.nocookie.net/testthecyclone/images/c/cf/RTC_Poster.jpg/revision/latest?cb=20250429112304">
        </div>
    </div>

    <input class="button is-primary" type="submit" value="Save & Sent">
    </form>`;

//Array contenedor de musicales
const musicals = [
    {
        name:"Hamilton",
        image:"https://tse4.mm.bing.net/th/id/OIP.wKjelyRrowRDjBDLAmmMbAHaHa?pid=Api&P=0&h=220",
    },
    {
        name:"EPIC",
        image:"https://m.media-amazon.com/images/M/MV5BYjViOTY5MGEtOTVmYS00ODc0LTgyZjktZjU1MmZjZjRlZjBiXkEyXkFqcGc@._V1_.jpg",
    },
    {
        name:"Sweeney Todd. The demon barber of Fleet Street",
        image:"https://i.scdn.co/image/ab67616d0000b273bca2a67b5ca9d790c55299e3",
    },
    {
        name:"Wicked",
        image:"https://m.media-amazon.com/images/I/61KnhHzI8eL._UF1000,1000_QL80_.jpg",
    }
];


//-----------------------------------------------------------------
//Maneja de las rutas a traves del servidor

const http = require('http');

const server = http.createServer((request,response) => {
    if(request.url == "/main"){
        response.setHeader('Content-Type','text/html');
        

        let html_interests=`
        <!--Interest and Skills-->
        <section class="section">
            <div class="container">
                <h2 class=" subtitle">Intereses Personales </h2>
                <div class="block">
                    <p>
                        Disfruto del aprendizaje, de los retos intelectuales y últimamente tambien de los hermosos momentos de la vida.
                    </p>
                    <p>
                        Me encanta pasar el tiempo con mi hermosa novia, con mis amigos y aprender un poco de todo en realidad; de escuchar musicales y música de todo tipo, sobre todo música pirata. Disfruto mucho de mi carrera y tengo muchas ganas de desarrollar un producto que vaya más alla de pequeños programas para consola.
                    </p>
                    <br>
                </div>
                
            </div>
        </section>

        <section class="section">
                <div class="container">
                    <h2 class=" subtitle">
                        Parte Adicional: Musicales 
                    </h2>
                    <div class="block">
                        <p>
                            Hace unos años encontre mi pasión por los músicales cuando escuche Hamilton por primera vez. A partir de ese momento a pesar de que no conozca muchos músicales me he vuelto un fan enpedernido de muchos de ellos llegando a memorizarme casi todas las canciones de los mismos. A continuación presento una tabla con mis musicales preferidos hasta la fecha. 
                        </p>
                    </div>

                    <div class="is-flex is-justify-content-center">
                        <table border="" class="table"> 
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                        </tr>`

        for(let i =0; i<musicals.length; i++){
            html_interests+=`<tr>
                <td><p>${musicals[i].name}</p></td>
                <td class="image_music">
                    <figure class="image is-square ">
                        <img src="${musicals[i].image}">
                    </figure>
                </td>
            </tr>`
        }                        
                        
        html_interests+=`</tr>
                    </table>
                    </div>
                </div>
        </section>`

        response.write(html_header + html_index + html_interests + html_footer);
        response.end();

    }
    else if(request.url == "/abi"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header + html_index + html_abilities + html_footer);
        response.end();

    }
    else if(request.url == "/form" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html_header  + html_form + html_footer);
        response.end();

    }
    else if(request.url == "/form" && request.method == "POST"){
        let datos_completos = [];

        request.on('data', (data)=>{
            console.log(data);
            datos_completos.push(data)
        });

        request.on('end', ()=>{
            const string_datos_completos = Buffer.concat(datos_completos).toString();
            console.log(string_datos_completos);

            //decodeURIComponent helps to obtain the correct symbols after being processed by the browser.

            const name =decodeURIComponent(string_datos_completos.split("&")[0].split("=")[1]);
            const image = decodeURIComponent(string_datos_completos.split("&")[1].split("=")[1]);
            const newMusical = {
                name: name,
                image: image,
            };
            musicals.push(newMusical);
            response.writeHead(303, { Location: '/main' });
            response.end();

        });
        
    }

    else{
        response.setHeader('Content-Type','text/html');
        response.write(html_header + "Error 404" + html_footer);
        response.end();
    }

});


server.listen(3000);