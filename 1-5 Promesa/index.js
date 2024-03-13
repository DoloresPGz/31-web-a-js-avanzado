// Definición de la promesa
function promesa () {
    return new Promise((resolve, reject) => {
    // TODO: La solicitud a la API
    const numero = 3;
        setTimeout(() => {
            if (numero === 2) {
                console.log('Promesa por resolver');
                resolve();
            } else {
                console.log('Promesa por rechazar');
                reject();
            }
        }, 3000);
    });
}

// Ejecutar la promesa
promesa()
    .then(() => {
        console.log('Se resolvio correctamente');
    })
    .catch(() => {
        console.log('Se rechazó la promesa');
    })