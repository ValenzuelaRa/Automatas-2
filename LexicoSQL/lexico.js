const fs = require('fs');
<<<<<<< HEAD

fs.readFile(SQL, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

    //Se inicializa un array con los signos y espacios que contiene el documento
    const signos = [".",",",";","!","@","=","(",")","*","_",",",":","="," ", "\r","\n","'"] 

    //Se inicializa una cadena vacia para almacenar palabras encontradas
    let palabra = ''
    //Se inicializa un array vacio que contendra el resultado final
    const resultado = [];
  
    for (let i = 0; i < data.length; i++) {
  
      const caracter = data[i];
  
      if (signos.includes(caracter)) {
          if (palabra !== "") {
              resultado.push(palabra);
              palabra = "";
          }
          resultado.push(caracter);
      } else {
          palabra += caracter;
      }
  }
  
  if (palabra !== "") {
      resultado.push(palabra);
  }
  
  console.log(resultado);
  })



=======

// Lee el archivo 'procedure.txt'
fs.readFile('sp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const caracteres_Especiales = [';', ':', "'", '=', '(', ')', '"', '*', '.', ' ', '@', '[', ']', '|', '\n', '\r']
    let resultado = [];
    let palabra = "";

    for (let i = 0; i < data.length; i++) {
        const caracter = data[i];
        if (caracteres_Especiales.includes(caracter)) {
            if (palabra !== "") {
                resultado.push(palabra);
                palabra = "";
            }
            resultado.push(caracter);
        }
        else {
            palabra += caracter;
        }
    }

    console.log(resultado);

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

        // Divide el archivo de datos en líneas
        const lineas = datos.split('\n');

        // Itera sobre las líneas del archivo 'sqlkeywords.txt'
        for (let i = 0; i < lineas.length; i++) {
            const linea = lineas[i].trim();
            if (linea !== "") {
                const partes = linea.split(' ');
                if (partes.length >= 2) {
                    const token = partes[0];
                    const palabraReservada = partes.slice(1).join(' ').replace(/"/g, '').trim().toUpperCase(); // Quita comillas y normaliza a mayúsculas
                    palabrasReservadas.push(palabraReservada);
                    tokens.push(token);
                }
            }
        }

        // Itera sobre las palabras del archivo sp.txt
        for (let i = 0; i < resultado.length; i++) {
            const palabra = resultado[i];
            let tokenAsignado = '';
            for (let j = 0; j < palabrasReservadas.length; j++) {
                if (palabrasReservadas[j] === palabra) {
                    tokenAsignado = tokens[j];
                    break;
                }
            }
            // Si la palabra no está en la lista de palabras reservadas, imprímela también
            if (tokenAsignado === '') {
                console.log(`Palabra no reservada: ${palabra} (No tiene token asignado)\n`);
            } else {
                console.log(`Palabra Reservada: "${palabra}" ----- Token: ${tokenAsignado}\n`);
            }
        }
    });
});
>>>>>>> 764ccc2f071bed0b3394a1b70c89fc474ae76039
