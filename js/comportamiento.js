/*
DOM (Document Object Model) 
Es una interface entre el HTML y cualquier lenguaje que se quiera modificar.

Es gracias a este o atraves de este que podemos modificar los elementos HTML.

objeto en JS
document - es el DOM. Todos los eventos que se mencionan son aquellos disponibles pero nulos.
*/

//Visualizar el DOM en la consola
//console.log(document);

const personal_data = document.getElementById("personal_data");
console.log(personal_data);


const before_click = '<p><strong>Datos de contacto:</strong></p><div class="element"><p><strong>Nombre:</strong> Rodrigo Alejandro Hurtado Cortés</p></div><div class="element"><p><strong> Matricula:</strong> A01713854</p></div><div class="element"><p><strong>Correo electrónico escolar:</strong> a01713854@tec.mx</p></div><div class="element"><p id="last_email"><strong>Correo electrónico personal:</strong> hurtadorodrigo00@gmail.com</p></div>';

const after_click = '<p><strong>Datos de contacto:</strong></p><div class="element"><p><strong>Nombre:</strong> Rodrigo Alejandro Hurtado Cortés</p></div><div class="element"><p><strong> Matricula:</strong> A01713854</p></div><div class="element"><p><strong>Correo electrónico escolar:</strong> a01713854@tec.mx</p></div><div class="element"><p><strong>Correo electrónico personal:</strong> hurtadorodrigo00@gmail.com</p></div><div class="element"><p id="last_email"> <strong>LinkedIn:</strong><a style="color: black," href="https://www.linkedin.com/in/rodrigo-hurtado-cortes/"> https://www.linkedin.com/in/rodrigo-hurtado-cortes/ </a></p></div>';

const original = () => {
    personal_data.innerHTML=before_click;
    personal_data.onclick = modified;
};

const modified = () => {
    personal_data.innerHTML=after_click;
    personal_data.onclick = original
};


personal_data.onclick = modified;
