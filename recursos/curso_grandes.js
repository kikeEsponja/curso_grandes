let intentos = 1;

let botonDerRaton = document.getElementById('miboton');
botonDerRaton.addEventListener('contextmenu', (event) =>{
    event.preventDefault();
	let contenedor = document.getElementById('contenedor');
    let instruccion = document.getElementById('instruccion');
    //let siguiente = document.createElement('a');
	let felicidades = document.createElement('p');
	felicidades.textContent = 'FELICIDADES! Has pasado al siguiente nivel!';
    felicidades.style.color = 'green';
	//siguiente.textContent = 'siguiente';
	//siguiente.href = '../quiz_2/quiz_2.html';
	contenedor.appendChild(felicidades);
	//contenedor.appendChild(siguiente);
    botonDerRaton.style.display = 'none';
    instruccion.style.display = 'none';
});

document.getElementById('miboton').addEventListener('click', (event) =>{
	if(event.button === 0){
    	intentos = intentos - 1;
    	alert('te quedan ' + intentos + ' intentos');
    	repaso();
    }
});

function repaso(){
    if(intentos < 1){
    	alert('debes repasar!');
    	window.location.href = "../vistas/indice.html"
    }
}

const salir = document.getElementById('salir');
salir.addEventListener('click', () => {
	window.location.href = "../vistas/indice.html";
});