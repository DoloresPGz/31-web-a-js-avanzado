// Mandar a llamar la biblioteca que instalamos previamente
import request from "request";

// La URL a la que le solicitaré la info
const URL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

console.time('peticion')
request.get(URL, (error, response, body) => {
    console.log('Error', error);
    console.log('Respuesta', response.statusCode);
    console.timeEnd('peticion');
});

