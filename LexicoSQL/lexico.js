const fs = require('fs');

// Lee el archivo 'procedure.txt'
fs.readFile('sp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Define los caracteres especiales
    const caracteresEspeciales = [';', ':', "'", '=', '(', ')', '"', '*', '.', ' ', '@', '[', ']', '|', '\n', '\r'];

    // Inicializa variables para tokenización
    let resultado = [];
    let palabra = '';

    // Itera sobre cada carácter en el archivo
    for (let i = 0; i < data.length; i++) {
        const caracter = data[i];
        if (caracteresEspeciales.includes(caracter)) {
            if (palabra !== '') {
                resultado.push(palabra.toUpperCase()); // Normaliza a mayúsculas
                palabra = '';
            }
            resultado.push(caracter);
        } else {
            palabra += caracter;
        }
    }

    // Lee el archivo 'sqlkeywords.txt' para palabras reservadas y números
    fs.readFile('sqlkeywords.txt', 'utf-8', (err, datos) => {
        if (err) {
            console.error(err);
            return;
        }

        // Define los caracteres separadores
        const caracteresSeparadores = [' ', '"'];

        // Inicializa variables para palabras reservadas y números
        let palabrasReservadas = [];
        let tokens = [];
        let temporalPalabraReservada = '';
        let temporalTokens = '';

        // Itera sobre cada línea en el archivo 'sqlkeywords.txt'
        const lineas = datos.split('\n');
        lineas.forEach(linea => {
            const partes = linea.trim().split(' : ');
            if (partes.length === 2) {
                const palabraReservada = partes[1].replace(/"/g, '').trim().toUpperCase(); // Quita comillas y normaliza a mayúsculas
                palabrasReservadas.push(palabraReservada);
                tokens.push(partes[0]);
            }
        });

        for (let i = 0; i < resultado.length; i++) {
            let tokenAsignado = '';
            for (let j = 0; j < palabrasReservadas.length; j++) {
                if (palabrasReservadas[j] === resultado[i].toUpperCase()) {
                    console.log(`Clave: ${resultado[i]} Token: ${tokens[j]}`);
                    tokenAsignado = tokens[j];
                    break;
                }
            }
            // Si la palabra no está en la lista de palabras reservadas, imprímela también
            if (tokenAsignado === '' && resultado[i] !== '\n' && resultado[i] !== '\r') {
                console.log(`Palabra: ${resultado[i]} (No tiene token asignado)`);
            }
        }
    });
});