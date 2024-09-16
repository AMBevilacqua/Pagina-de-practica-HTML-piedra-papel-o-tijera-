var puntosJugador = 0;
var puntosRival = 0;
var ataqueJugador = '';
var ataqueRival = '';

function ataquePiedra() {
    ataqueJugador = 'PIEDRA';
    ataqueAleatorioRival();
}
function ataquePapel() {
    ataqueJugador = 'PAPEL';
    ataqueAleatorioRival();
}
function ataqueTijera() {
    ataqueJugador = 'TIJERA';
    ataqueAleatorioRival();
}

function ataqueAleatorioRival() {
    var ataqueAleatorio = aleatorio(1, 3);
    if (ataqueAleatorio === 1) {
        ataqueRival = 'PIEDRA';
    } else if (ataqueAleatorio === 2) {
        ataqueRival = 'PAPEL';
    } else {
        ataqueRival = 'TIJERA';
    }
    combate();
}


function crearMensaje(resultadoCombate) {
    var sectionMensaje = document.getElementById('mensaje');
    var parrafo = document.createElement('p');
    parrafo.innerHTML = 'Seleccionaste ' + ataqueJugador + ',' + ' el rival selecciono ' + ataqueRival + '- ' + resultadoCombate;
    sectionMensaje.appendChild(parrafo);
}

function crearMensajeFinal(resultadoFinal) {
    let sectionBotonReiniciar = document.getElementById('reiniciar')
    sectionBotonReiniciar.style.display = 'block'

    let sectionMensaje= document.getElementById('mensaje')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensaje.appendChild(parrafo)

    let botonPiedra = document.getElementById('boton-piedra')
    botonPiedra.disabled=true   

    let botonPapel = document.getElementById('boton-papel')
    botonPapel.disabled=true

    let botonTijera = document.getElementById('boton-tijera')
    botonTijera.disabled=true
}


function combate() {
    var spanPuntosJugador = document.getElementById('puntos-jugador');
    var spanPuntosRival = document.getElementById('puntos-rival');

    if (ataqueJugador === ataqueRival) {
        crearMensaje('EMPATE')
    } else if (ataqueJugador === 'PIEDRA' && ataqueRival === 'TIJERA' || ataqueJugador === 'PAPEL' && ataqueRival === 'PIEDRA' || ataqueJugador === 'TIJERA' && ataqueRival === 'PAPEL') {
        crearMensaje('GANASTE 1 PUNTO')
        puntosJugador++;
        spanPuntosJugador.innerHTML = puntosJugador;
    } else {
        crearMensaje('EL RIVAL GANO 1 PUNTO')
        puntosRival++;
        spanPuntosRival.innerHTML = puntosRival;
    }
    revisarPuntos();

}

function revisarPuntos() {
    if (puntosJugador === 3) {
        crearMensajeFinal('Felicidades ganaste!!! 🎉🎉🎉');
    } else if (puntosRival === 3) {
        crearMensajeFinal('lo siento perdiste 😆');
    }
}

function reiniciarJuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let botonPiedra = document.getElementById('boton-piedra')
botonPiedra.addEventListener('click', ataquePiedra)

let botonPapel = document.getElementById('boton-papel')
botonPapel.addEventListener('click', ataquePapel)

let botonTijera = document.getElementById('boton-tijera')
botonTijera.addEventListener('click', ataqueTijera)

let botonReiniciar = document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click', reiniciarJuego)

let sectionBotonReiniciar = document.getElementById('reiniciar')
sectionBotonReiniciar.style.display = 'none'