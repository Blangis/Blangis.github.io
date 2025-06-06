// DOM
console.log("Heyyy")

// ID
let elementoID = document.getElementById('p1');
console.dir(elementoID);
console.log(elementoID);
elementoID.textContent="Cuicuiri";
elementoID.innerHTML="Change";

// Clase
let elementoClass = document.getElementsByClassName('pfs');
console.log(elementoClass);
console.log(elementoClass[2]);
elementoClass[1].innerHTML = "Soy otro párrafo de inner html"

// Por etiquetas
let elementoEtiquetas = document.getElementsByTagName('p');
console.log(elementoEtiquetas)
elementoEtiquetas[2].innerHTML = "Soy el elemento 3";

let textoCajita = document.getElementById('caja');
textoCajita.textContent= "Soy una cajita modificada desde js"; 

let figura = document.getElementById('cuadrado');
figura.textContent= "Soy una figura modificada desde js";
console.log(figura)

let buttonDeluxe= document.getElementById('buttonDeluxe');
buttonDeluxe.addEventListener("click", function(){
    if(figura.style.color == "green"){
        figura.style.color = "red";
        figura.style.fontSize = "80px"
    }else{
        figura.style.color = "green"
        figura.style.fontSize = "60px"
    }

})

// document.querySelector('#modificame').style.color="purple";


let modificar = document.querySelector('#modificame');
console.log(modificar);

let keyDownEvent = document.querySelector("#texto-tecla-presionada");
keyDownEvent.addEventListener("keydown",logKey);

function logKey(tecla){
    if(tecla.code == "KeyA" || tecla.code == "KeyS" || tecla.code == "KeyE"){ 
        modificar.textContent = `Esa es la letra con código: ${tecla.code}`
        modificar.style.color = "purple"
    } else{
        modificar.textContent = "Vas bien :)"
        modificar.style.color="blue";
    }
}

// EVENTO SUBMIT
let formulario = document.getElementById('loginForm');

formulario.addEventListener("submit", () =>{
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    alert("Formulario de " + nombre + " enviadoooo");
    alert("Tu correo es:" + correo)
})


/*
function miFuncion(){
    Funcion equis
}

const FuncionFlecha =() => {}
    */