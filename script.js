const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let jugadorActual = "X";
let estadoJuego = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];

console.log(`
Instrucciones: 
Para jugar, ingresa el número de la celda en la que quieres colocar tu ficha.
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |
`);

function imprimirTablero() {
    console.log(`
| ${estadoJuego[0]} | ${estadoJuego[1]} | ${estadoJuego[2]} |
| ${estadoJuego[3]} | ${estadoJuego[4]} | ${estadoJuego[5]} |
| ${estadoJuego[6]} | ${estadoJuego[7]} | ${estadoJuego[8]} |
`);
}

function verificarGanador() {
    const patronesGanadores = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
    for (const patron of patronesGanadores) {
        const [a, b, c] = patron;
        if (estadoJuego[a] !== "0" && estadoJuego[a] === estadoJuego[b] && estadoJuego[a] === estadoJuego[c]) {
            return true;
        }
    }
    return false;
}

function manejarEntrada(entrada) {
    const movimiento = parseInt(entrada) - 1;
    if (estadoJuego[movimiento] === "0") {
        estadoJuego[movimiento] = jugadorActual;
        imprimirTablero();
        if (verificarGanador()) {
            console.log(`¡Jugador ${jugadorActual} es el ganador!`);
            rl.close();
        } else if (estadoJuego.includes("0")) {
            jugadorActual = jugadorActual === "X" ? "O" : "X";
            console.log(`Es el turno de ${jugadorActual}`);
        } else {
            console.log("¡Empate! No hay más movimientos posibles.");
            rl.close();
        }
    } else {
        console.log("¡Movimiento inválido! Inténtalo de nuevo.");
    }
}

imprimirTablero();
console.log(`Es el turno de ${jugadorActual}`);
rl.on('line', manejarEntrada);
