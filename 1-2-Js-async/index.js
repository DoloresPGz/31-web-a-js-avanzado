function saludar(nombre) {
    return "Hola " + nombre 
}

function ejecutaFuncion(callback) {
    console.log(callback("Pedro"));
}

console.log(saludar()) //Ejecutando la función
console.log("---------------");
console.log(ejecutaFuncion(saludar)); //Mando a llamar la definición