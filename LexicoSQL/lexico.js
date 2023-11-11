const fs = require('fs');

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



