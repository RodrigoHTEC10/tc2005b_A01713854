//Rodrigo Alejandro Hurtado Cortés - A01713854

//Exercise No. 1
function exercise1(){
    let number = prompt("Ingresa un numero mayor a 0.");
    while(number < 0){
        number = prompt("Por favor, ingresa un numero mayor a 0.");
    }

    let HTMLTable = '<table class="table"><tr> <th>Number</th> <th>Square</th> <th>Cube</th> </tr>';

    for(let i = 0; i<number; i++){
        HTMLTable += "<tr> <td>"+ i +"</td> <td>"+ i*i +"</td> <td>"+ i*i*i +"</td> </tr>";
    };

    HTMLTable += "</table>";
    document.getElementById("ejercicio1").innerHTML = HTMLTable;
    document.getElementById("dis1").style.display="block";
}

//------------------------------------------------------------------

function exercise1dis(){
    document.getElementById("ejercicio1").innerHTML = '';
    document.getElementById("dis1").style.display="none";
}

//------------------------------------------------------------------
//Exercise No. 2
function exercise2(){
    const num1 = Math.round(Math.random()*10);
    const num2 = Math.round(Math.random()*10);

    const result = num1+num2;

    const answer = prompt("Resuelve la siguiente suma: \n"+num1+" + "+num2+" = ?");

    let div = document.getElementById("ejercicio2");

    if(answer == result){
        div.innerHTML='<p>Correcto!</p><p>La suma de '+num1+' + '+num2+' es '+result+'</p>';
    }
    else{
        div.innerHTML='<p>Es incorrecto.</p> <p>El resultado correcto es '+result+' </p>';
    }

    document.getElementById("dis2").style.display="block";
}

//------------------------------------------------------------------

function exercise2dis(){
    document.getElementById("ejercicio2").innerHTML = '';    
    document.getElementById("dis2").style.display="none";
}

//------------------------------------------------------------------
//Exercise No.3

function exercise3(){
    //Number of elements of the array
    let numbers = parseInt(prompt("Ingresa el número de elementos que seran incertados en el array."));

    const arr = new Array;

    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    if(numbers<0)
        numbers = 0;
    
    for(let i = 0; i<numbers; i++){
        let randomInt = Math.random();
        if(Math.random()<0.5){
            arr.push(Math.round(randomInt*-10));
        }
        else{
            arr.push(Math.round(randomInt*10));
        }   
    }

    for(let i=0; i<arr.length;i++){
        if(arr[i]>0){
            positives = positives+1;
        }
        else if(arr[i]<0){
            negatives = negatives+1;
        }
        else{
            zeros = zeros+1;
        }
    }

    document.getElementById("ejercicio3").innerHTML='<p>'+arr+'</p><p>Números positivos:'+positives+'</p><p>Números negativos: '+negatives+'</p><p>Ceros: '+zeros+'</p>';
    document.getElementById("dis3").style.display="block";
}

//------------------------------------------------------------------

function exercise3dis(){
    document.getElementById("ejercicio3").innerHTML = '';    
    document.getElementById("dis3").style.display="none";
}

//------------------------------------------------------------------

//Exercise No. 4

function exercise4(){
    let matriz = [];
    let average = '<p>';
    const length = parseInt(prompt("Ingresa un número de dimensiones de la matriz de números: "));

    for(let i=0; i<length; i++){
        matriz[i] = [];
        for(let j =0; j<length; j++){
            matriz[i][j] = Math.round(Math.random()*10);
        }
    }

    console.log(matriz);
    let matriz_texto = "";

    for(let i=0;i<length;i++){
        let sum = 0;
        matriz_texto += "<p>[";

        for(let j =0; j<length; j++){
            sum += matriz[i][j];
            matriz_texto += matriz[i][j]+", "
        }

        matriz_texto = matriz_texto.slice(0,-1);
        matriz_texto+="]</p>"
        average += (sum/length) +", ";
    }

    average = average.slice(0,-2);
    average += '</p>';

    document.getElementById("ejercicio4").innerHTML=matriz_texto+average;
    document.getElementById("dis4").style.display="block";
}

//------------------------------------------------------------------
function exercise4dis(){
    document.getElementById("ejercicio4").innerHTML = '';    
    document.getElementById("dis4").style.display="none";
}

//------------------------------------------------------------------

//Ejercicio No.5

function exercise5(){
    const number = prompt("Ingresa un numero más de 2 cifras: ");
    
    let reverse = "";
    console.log(number);
    let array = Array.from(number);

    console.log(array);

    for(let i = array.length; i>0;i--){
        reverse += array[i-1];
    }

    console.log(reverse);

    document.getElementById("ejercicio5").innerHTML ='<p>Original Number: '+number+'</p><p>Reversed number: '+reverse+'</p>';
    document.getElementById("dis5").style.display="block";

    
}

//------------------------------------------------------------------

function exercise5dis(){
    document.getElementById("ejercicio5").innerHTML = '';    
    document.getElementById("dis5").style.display="none";
}



//------------------------------------------------------------------

//Ejercicio 6

class account{
    #balance = 0;

    constructor(names,bank,creationDate){
        this.names = names;
        this.bank = bank;
        this.creationDate = creationDate;
    }

    add(val){
        this.#balance += parseInt(val);
    }

    retrieve(val){
        this.#balance -= parseInt(val);
    }

    reset(){
        this.#balance = 0;
    }

    getBalance(){
        return this.#balance;
    }

    getInfo(){
        return `<p>Nombre del usuario: ${this.names} </p><p>Nombre del banco: ${this.bank}</p><p>Fecha de creación: ${this.creationDate}</p>`;
    }
}


let name = "Rodrigo";
let bank = "Santander";
const acc = new account(name,bank,new Date().toDateString());


function exercise6(){
    const name = prompt("Ingresa el nombre del dueño de la cuenta bancaria: ");
    const bank = prompt("Ingresa el nombre del banco: ");
    acc.names = name;
    acc.bank = bank;
}

function depositar(){
    const val = document.getElementById("deposito");
    acc.add(val.value);
    console.log(acc.getBalance());
    document.getElementById("balance").textContent = acc.getBalance();
}

function retirar(){
    const val = document.getElementById("retiro");
    acc.retrieve(val.value);
    console.log(acc.getBalance());
    document.getElementById("balance").textContent = acc.getBalance();
}

function info(){
    document.getElementById("bank_info").innerHTML = acc.getInfo();
}


function exercise6dis(){
    console.log(acc.getBalance());
    acc.reset();
    document.getElementById("balance").textContent = acc.getBalance();
    document.getElementById("bank_info").innerHTML = '';
    acc.names = "Rodrigo";
    acc.bank = "Santander";
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