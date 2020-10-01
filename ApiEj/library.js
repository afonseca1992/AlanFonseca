const request = require('request-promise'); //Utilizar request promise
//Funcion para llamar a la api
function traerHeroes() {

    //configuracion de la llamada a la api
    var options = {
        method: 'GET',
        uri: 'https://www.superheroapi.com/api.php/10223922732878088/69',
        json:true

    };

    //respuesta
    return request(options); 
};
//exportar para utilizarlo en api.js
module.exports = traerHeroes;

