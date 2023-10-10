const fs = require('fs');

fs.readFile('./sp.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  console.log(data);
});