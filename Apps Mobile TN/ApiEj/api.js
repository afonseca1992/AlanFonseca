const traerHeroes = require("./library"); //llamando a library.js

//utilizaion de promise para traer la informacion de los heroes
traerHeroes().then(heroe => {
    console.log(heroe.name);
    console.log(heroe.powerstats);
});

