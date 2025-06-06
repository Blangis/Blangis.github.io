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

/*
function miFuncion(){
    Funcion equis
}

const FuncionFlecha =() => {}
    */