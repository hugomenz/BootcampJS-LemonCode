import axios from "axios";

function getCharacters() {
    return axios.get("https://www.breakingbadapi.com/api/characters").then(response => {
        return response.data;
    }).then(data => {
        return data;
    });
}

export { getCharacters };