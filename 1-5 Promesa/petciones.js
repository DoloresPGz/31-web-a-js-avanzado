// Crea una funcioón que reciba como parametro el ID de un personaje de star wars
// y solicite la info a la SWAPI para imprimir el nombre
function getCharacterById(ID) {
    const URL = `https://swapi.py4e.com/api/people/${ID}`
    fetch(URL)
        .then((result) => {
            return result.json();
        })
        .then((swapi) => {
            // console.log(swapi)
            console.log(swapi.name);
            console.log(swapi.homeworld);
        })
        .catch((err) => {
            console.log(err);
        });
}

getCharacterById(3);

// 10 min
// Crear una función donde le pases la URL del planeta y devuelva el nombre
function getPanetNameFromEndpoint(endpointPlanet) {
    
}