const fs = require('fs');


fs.readFile('./sp.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  
  const tokens = '\'\n\r*@:,;=.() '
  let palabra = ''
  let resultado = []

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

  let palabra = ''
  let tokens = []
  let palabrasReservadas = []
  let resultado2 = ''

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
  })
});