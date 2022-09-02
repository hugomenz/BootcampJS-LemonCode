import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";

// DataBusiness.getCharacters

DataBusiness.getCharacters().then((characters) => {
    const nodes = [];

    for (let char of characters) {
        console.log(char)
    }
});


DataBusiness.getCharacters().then((characters) => {
    const nodes = [];

    for (let char of characters) {
        const node = Utils.createCharacterRow(char);
        nodes.push(node);
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
    }
});


//
// Seguir aqui
//
// npm start !


// Me funciona la API, los personajes salen, asi que revisa los puntos que te piden.  
// Escribe a profesor comentandole el problema 404 con la ultima imagen, ya que esta se puede abrir (es un bebe)
// Falta implementar la parte de abrir una ventanita y meterle las "caracteristicas" 


// https://codesandbox.io/s/bootcamp-lemoncode-mod8-practica-4-forked-ei5xwf?file=/src/user-business.js


// https://breakingbadapi.com/documentation