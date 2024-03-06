// function despues(){
//     console.log('termino')
// }

// const despues2 = () => {
//     console.log('TErmino 2')
// };

// setTimeout(despues2, 1000);

// // Funcion anonima clásica
// setTimeout(function () {
//     console.log('Funcion anonima clásica')
// }, 1000)

// // Funcioon anonima con arrow
// setTimeout(() => {
//     console.log('Funcion anonima con arrow')
// }, 1000)



function procesoAsincrono(num, callback) {
    console.log('Inicio el proceso asincrono');    
    setTimeout(() => {
        const result = num * 2;
        callback(result);
    }, 2000);
};

// procesoAsincrono(5, (numero) => {
//     console.log('Ejecutando el callback', numero)
// });



// function suma(num1, num2) {
//     return num1 + num2;
// }

// const resultado = suma(10,5);
// console.log(resultado)

function suma(num1, num2, cb) {
    setTimeout(() => {
        const suma = num1 + num2;
        cb(suma)
    }, 2000);
}

const miCallbackResutado = (numero) => {
    console.log('resultadooo', numero)
}

const resultado = suma(10,5, miCallbackResutado);

// console.log(resultado)

