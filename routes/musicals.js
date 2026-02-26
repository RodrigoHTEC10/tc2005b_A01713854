/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 24th, 2026
Title: Musicals module.
*/

const express = require('express');
const router = express.Router();
const fylesystem = require('fs');
const http = require('http');
const bodyParser = require('body-parser');

const {html_index, html_footer, html_header, html_form} = require('../html/parts.js');

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



router.get('/list', (request, response, next) => {
    let html_interests=`
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
    
    fylesystem.writeFileSync('Musicals.txt',"");
    const file = fylesystem.createWriteStream('Musicals.txt',{flags: 'a'});
    
    for(let i =0; i<musicals.length; i++){
        html_interests+=`<tr>
                    <td><p>${musicals[i].name}</p></td>
                    <td class="image_music">
                        <figure class="image is-square ">
                            <img src="${musicals[i].image}">
                        </figure>
                    </td>
                </tr>`
                
        file.write("Name="+musicals[i].name+"&Image="+musicals[i].image+"\n");
    }
    file.end();                        
                            
    html_interests+=`</tr>
                        </table>
                        </div>
                    </div>
            </section>`

    response.send(html_header+html_index+html_interests+html_footer);
    response.end();
});

router.get('/form',(request,response,next)=>{
    response.render('form.ejs');
})

router.post('/form',(request,response,next)=>{
    console.log(request.body);
    musicals.push(request.body);
    response.redirect(303,'/musicals/list');
    response.end();
})

module.exports = router;