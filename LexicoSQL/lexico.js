
const fs = require('fs');

fs.readFile('./sp.txt', 'utf8', (err, data) => {

  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }


  const caracteres = [';', ':', "'", '=', '(', ')', '"', '*', '.', ' ', '@', '[', ']', '|', '\n', '\r'];
  
  let palabra = '';
  let resultado = [];


  for (let i = 0; i < data.length; i++) {
    let caracter = data[i];

    if (tokens.includes(caracter)) {
        if (palabra !== "") {
            resultado.push(palabra);
            palabra = "";
        }
        resultado.push(caracter);
    } else {
        palabra += caracter;
    }
  }
  console.log(resultado);

  
  fs.readFile('./sqlkeywords.txt', 'utf8', (err, data2) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

        let palabrasReservadas = [];
        let tokens = [];
        let banderaPalabraReservada = '';
        let banderaTokens = '';

    // Itera sobre cada carácter en el archivo (nota: debería ser 'data2' en lugar de 'data')
    for (let i = 0; i < data2.length; i++) {
      let caracter = data2[i];
      // Lógica de tokenización y procesamiento (incompleta y con problemas)
      if (tokens.includes(caracter)) {
          if (palabra !== "") {
              resultado.push(palabra);
              palabra = "";
          }
          resultado.push(caracter);
      } else {
          palabra += caracter;
      }
    }
    // Nota: No se está haciendo nada con 'resultado2' después de este procesamiento
  });
});
