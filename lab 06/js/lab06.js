class ShackShake{

}

//------------------------------------------------------------------

//Mostrar y ocultar las preguntas.

function revelar(){
    const elementos = document.querySelectorAll('.respuesta');

    elementos.forEach(el => {
        el.style.display = 'block';
    });

    document.getElementById("revelar").style.display="none";
    document.getElementById("ocultar").style.display="block";
}

//------------------------------------------------------------------
function ocultar(){
    const elementos = document.querySelectorAll('.respuesta');

    elementos.forEach(el => {
        el.style.display = 'none';
    });

    document.getElementById("revelar").style.display="block";
    document.getElementById("ocultar").style.display="none";
}