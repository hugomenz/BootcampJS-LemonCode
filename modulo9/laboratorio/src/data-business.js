import axios from "axios";

function getCharacters() {
    return axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then(response => { 
        // create the "effect" of loading > a Promise is needed
        const myPromise = new Promise(resolve => {
            setTimeout(function(){
                resolve(response.data);
            },1500);
        });
        return myPromise;
    })    
    .catch(error => {
        alert("Se ha producido un error: " + error);
    })
    .then(data => {
        return data;
    });
}

function getQuotesByCharacterName(characterName) {
    return axios
    .get("https://www.breakingbadapi.com/api/quote?author=" + characterName)
    .then(response => { 
        const myPromise = new Promise(resolve => {
                resolve(response.data);
        });
        return myPromise;
    })    
    .catch(error => {
        alert("Se ha producido un error: " + error);
    })
    .then(data => {
        return data;
    });
}


export { getCharacters, getQuotesByCharacterName };