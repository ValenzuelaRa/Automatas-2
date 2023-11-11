const fs = require('fs');

// Lee el archivo 'procedure.txt'
fs.readFile('sp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    //Se inicializa un array con los signos y espacios que contiene el documento
    const signos = [".",",",";","!","@","=","(",")","*","_",",",":","="," ", "\r","\n","'"] 

    //Se inicializa una cadena vacia para almacenar palabras encontradas
    let palabra = ''
    //Se inicializa un array vacio que contendra el resultado final
    const resultado = [];
    //Se recorre cada caracter del documento, en total son 194 caracterest
    for (let i = 0; i < data.length; i++) {
       // data[i] vale 0, donde el valor es "S" la cual se guarda como el primer caracter
      const caracter = data[i];
     //"S" se incluye en el arreglo de signos? False
      if (signos.includes(caracter)) {
        
          if (palabra !== "") {
              resultado.push(palabra);
              palabra = "";
          }
          
          resultado.push(caracter);
          //se ejecuta el bloque else
      } else {
        //palabra se actualiza y deja de ser una cadena vacia, ahora vale "S"
          palabra += caracter;
      }
  }

  console.log(resultado);
  })



