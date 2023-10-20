// Importa el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Bloque de lectura y tokenización del archivo 'sp.txt'
fs.readFile('./sp.txt', 'utf8', (err, data) => {
  // Manejo de errores en la lectura del archivo
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  // Define los caracteres que se utilizarán como tokens
  const tokens = '\'\n\r*@:,;=.() ';
  // Inicializa variables para procesamiento
  let palabra = '';
  let resultado = [];

  // Itera sobre cada carácter en el archivo
  for (let i = 0; i < data.length; i++) {
    let caracter = data[i];
    // Si el carácter es un token, guarda la palabra y el token en el resultado
    if (tokens.includes(caracter)) {
        if (palabra !== "") {
            resultado.push(palabra);
            palabra = "";
        }
        resultado.push(caracter);
    } else {
        // Si el carácter no es un token, agrégalo a la palabra actual
        palabra += caracter;
    }
  }
  // Imprime el resultado final después de la tokenización
  console.log(resultado);

  // Bloque de lectura y procesamiento del archivo 'sqlkeywords.txt'
  fs.readFile('./sqlkeywords.txt', 'utf8', (err, data2) => {
    // Manejo de errores en la lectura del archivo
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }

    // Inicializa variables para procesamiento
    let palabra = ''; // Nota: Esta variable está siendo redefinida, podría causar problemas
    let tokens = []; // Nota: Esta variable está vacía y no se utiliza en este contexto
    let palabrasReservadas = []; // Nota: Esta variable está siendo definida pero no se utiliza
    let resultado2 = ''; // Nota: Esta variable está siendo definida pero no se utiliza

    // Itera sobre cada carácter en el archivo (nota: debería ser 'data2' en lugar de 'data')
    for (let i = 0; i < data.length; i++) {
      let caracter = data[i];
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
