const fs = require('fs');

console.log(1)
fs.readFile('./miArchivo.txt', (err, data) => {
    console.log(2)
    console.log(data);
});
console.log(3)