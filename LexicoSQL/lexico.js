const fs = require('fs');
fs.readFile('./sp.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  const tokens = '.,;!@=()*_:"="\r\n '
  let palabra = ''
  const resultado = [];

data.split('').forEach((caracter) => {
    if (tokens.includes(caracter)) {
        if (palabra !== " ") {
            resultado.push(palabra);
            palabra = " ";
        }
        resultado.push(caracter);
    } else {
        palabra += caracter;
    }
});

if (palabra !== " ") {
    resultado.push(palabra);
}

console.log(resultado);

});
