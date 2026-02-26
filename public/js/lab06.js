/*
Author: Rodrigo Alejandro Hurtado Cortes
Date: February 21st, 2026.
Title: lab06.js
*/

//------------------------------------------------------------
/* Product Class */
class Product{
    constructor(name,amount,cost){
        this.name = name;
        this.amount = amount;
        this.cost = cost;
    }

    //***************************************** */
    increaseAmount(){
        this.amount++;
    }

    //***************************************** */
    decreaseAmount(){
        if(this.amount-1<0)
            this.amount = 0;
        else
            this.amount = this.amount-1;
    }

    //***************************************** */
    getName(){
        return this.name;
    }

    //***************************************** */
    getCost(){
        return this.cost;
    }

    //***************************************** */
    getAmount(){
        return this.amount;
    }

    //***************************************** */
    resetAmount(){
        this.amount = 0;
    }
}

//------------------------------------------------------------
/* ShackShake Class */
class ShackShake{

    constructor(){
        this.list = new Array();
    };

    //***************************************** */
    addProduct(product){
        this.list.push(product);
    };

    //***************************************** */
    getList(){
        console.log(this.list);
    };

    //***************************************** */
    getProductList(){
        document.getElementById("list").innerHTML="";
        console.log("Entrando a la funcion getProductList");
        
        for(let j = 0; j<this.list.length; j++){
            console.log(j);

            let tempName = this.list[j].getName();            
            let tempAmount = parseInt(this.list[j].getAmount());
            let tempCost = parseFloat(this.list[j].getName());

            if(tempAmount > 0){

                const listItem = document.createElement("li");
                const text = tempName+": "+tempAmount+" item(s). - Cost: $"+Math.round(parseFloat(this.list[j].getCost()*this.list[j].getAmount()) * 100) / 100;
                
                listItem.innerText = text;

                document.getElementById("list").appendChild(listItem);
            }

            this.getBalance();
            this.getTax();
        };
    };

    //***************************************** */
    getBalance(){
        document.getElementById("balance").textContent="";
        let tempBalance = 0.00;

        for(let i = 0; i<this.list.length; i++){
            tempBalance += Math.round(parseFloat(this.list[i].getCost()*this.list[i].getAmount()) * 100) / 100;

            //Testing
            console.log(this.list[i].getName());
            console.log(this.list[i].getAmount());
        }

        document.getElementById("balance").textContent = tempBalance;
    }

    //***************************************** */
    getTax(){
        let balance = parseFloat(document.getElementById("balance").textContent);
        let tax = Math.round(balance * 14.7)/100;
        document.getElementById("tax").textContent = tax;
        document.getElementById("total").textContent = Math.round(tax + balance*100)/100;
    }

    //***************************************** */
    reset(){
        for(let i = 0; i<this.list.length; i++){
            this.list[i].resetAmount();
        }
        this.getProductList();
        document.getElementById("list").innerHTML="<p>Nada en el carrito de compras.</p>";
    }
}

//------------------------------------------------------------------
//Comportamiento de los botones de producto
let store = new ShackShake();

let firstBunClick = true;
let firstPattyClick = true;
let firstVegClick = true;

let bun;
let patty;
let veg;

//***************************************** */
//Add Bun
document.getElementById("add_bun").addEventListener('click', ()=>{
    if(firstBunClick){
        bun = new Product("Hamburguer Bun",1,13.00);
        store.addProduct(bun);
        store.getList();
        firstBunClick = false;
        document.getElementById("less_bun").disabled = false;
    }
    else{
        bun.increaseAmount();
        store.getList();
    }
    store.getProductList();
});

//***************************************** */
//Add Patty
document.getElementById("add_patty").addEventListener('click', ()=>{
    if(firstPattyClick){
        patty = new Product("Hamburguer Patty",1,17.00);
        store.addProduct(patty);
        firstPattyClick = false;
        document.getElementById("less_patty").disabled = false;
    }
    else
        patty.increaseAmount();
    store.getProductList();
});

//***************************************** */
//Add Vegetable
document.getElementById("add_veg").addEventListener('click', ()=>{
    if(firstVegClick){
        veg = new Product("Hamburguer Vegetables",1,10.00);
        store.addProduct(veg);
        firstVegClick = false;
        document.getElementById("less_veg").disabled = false;
    }
    else
        veg.increaseAmount();
    store.getProductList();
});


//***************************************** */
//Buy
function buy(){
    let total = document.getElementById("total").innerText; 
    confirm(`Me debes $${total} pesos.`);
    store.reset();
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