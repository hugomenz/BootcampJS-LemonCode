import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";

// DataBusiness.getCharacters

DataBusiness.getCharacters().then((characters) => {
    
    document.getElementById("root").innerHTML = ""; // delete the "Loading..." text
    
    const nodes = [];

    for (let char of characters) {
        const node = Utils.createCharacterRow(char);
        
        // RETO // #######################################
        DataBusiness.getQuotesByCharacterName(char.name.replace(" ", "+")).then((quotes) => {
            node.onclick = function(){
                Utils.showCharacter(char, quotes[0]);
            };
        });
        // RETO // #######################################

        
        // Parte extra ***********************************
        /*
        node.onclick = function(){
            Utils.showCharacter(char, quotes[0]);
        }; 
        */
        // ***********************************************
        
        nodes.push(node);
    }

    for (let node of nodes) {
        document.getElementById("root").append(node);
    }
});