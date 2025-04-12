// Variable global para almacenar el color
let color;

// Evento para detectar la tecla presionada
document.addEventListener('keydown', function (event) {
    const divKey = document.getElementById("key");

    if (event.key === 'a') {
        color = 'pink'; 
        divKey.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange'; 
        divKey.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'lightblue';
        divKey.style.backgroundColor = color;
    } else if (event.key === 'q') {
        const nuevoDiv1 = document.createElement('div');
        nuevoDiv1.style.width = '200px';
        nuevoDiv1.style.height = '200px';
        nuevoDiv1.style.backgroundColor = 'purple'; 
        nuevoDiv1.style.border = '2px solid black';
        document.body.appendChild(nuevoDiv1);
    } else if (event.key === 'w') {
        const nuevoDiv2 = document.createElement('div');
        nuevoDiv2.style.width = '200px';
        nuevoDiv2.style.height = '200px';
        nuevoDiv2.style.backgroundColor = 'gray'; 
        nuevoDiv2.style.border = '2px solid black';
        document.body.appendChild(nuevoDiv2);
    } else if (event.key === 'e') {
        const nuevoDiv3 = document.createElement('div');
        nuevoDiv3.style.width = '200px';
        nuevoDiv3.style.height = '200px';
        nuevoDiv3.style.backgroundColor = 'brown'; 
        nuevoDiv3.style.border = '2px solid black';
        document.body.appendChild(nuevoDiv3);
    }
});