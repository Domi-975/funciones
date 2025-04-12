



// EJERCICIO 2.2
//Modifica la función para que reciba el elemento clickeado de forma de no
//tener que seleccionarlo nuevamente dentro de la función 

//function pintar(elemento) {
   // elemento.style.backgroundColor = 'yellow';}

//const ele = document.getElementById("ele1");
//ele.addEventListener("click", function() {
 //   pintar(ele); });




// EJERCICIO 2.3   Green por defecto



function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

// Al hacer clic en el div, se pinta de verde (color por defecto)
ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); // Cambia el color a amarillo al hacer clic
});


pintar(ele); // Esto pintará el div de verde al cargar la página
