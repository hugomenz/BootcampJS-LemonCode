// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe
// si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).
var hasId = obj => {
    const { id } = obj;
    return (id) ? true : false;
}

const bookCollection = { 
    isbn: 23453, 
    author: "J. Simmons" 
};

const sampleObject = {
    id: 43,
    name: "Javi",
    age: 36,
};

console.log(hasId(bookCollection));
console.log(hasId(sampleObject));


// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
var head = ([firstElement,]) => firstElement;

const sampleArray = [1, 2, 3, 4];
console.log(head(sampleArray));

// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con 
// todos los elementos menos el primero.
var tail = (arr) =>  {
    const [, ...rest] = arr;
    return rest;
}

console.log(tail(sampleArray));

// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva
// un nuevo array donde el primer elemento ha sido colocado en la última posición.



// Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho 
// objeto clonado excepto la propiedad id si la hubiera.



// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, 
// devuelva otro array filtrado con aquellas palabras que empiecen por a.



// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva
// otro string con la concatenación de todos, separados por |.




// Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que 
// sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.





// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como 
// resultado el producto de todos ellos.