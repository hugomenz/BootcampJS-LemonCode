// Implementa una función llamada hasId que admita como parámetro un objeto y compruebe
// si dicho objeto tiene una propiedad llamada id (debe devolver booleano true/false).
console.log("---------- hasId ----------")

const hasId = ({ id }) => (id) ? true : false;

const collectionBook = { 
    isbn: 23453, 
    author: "J. Simmons" 
};

const sampleObject = {
    id: 43,
    name: "Javi",
    age: 36,
};
console.log(collectionBook);
console.log(hasId(collectionBook)); // false

console.log(sampleObject);
console.log(hasId(sampleObject));   // true



// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.
console.log("---------- head ----------")

const head = ([firstElement,]) => firstElement;

const sampleArray = [1, 2, 3, 4];

console.log(sampleArray);
console.log(head(sampleArray));



// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con 
// todos los elementos menos el primero.
console.log("---------- tail ----------")

const tail = ([, ...rest]) =>  rest;

console.log(sampleArray);
console.log(tail(sampleArray)); // sampleArray = [1, 2, 3, 4]



// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada, devuelva
// un nuevo array donde el primer elemento ha sido colocado en la última posición.
// No se debe modificar el array de entrada. Piensa en destructuring y rest.
console.log("---------- swapFirstToLast ----------")

const swapFirstToLast = ([firstElement, ...rest]) => [...rest, firstElement];

console.log(sampleArray);
console.log(swapFirstToLast(sampleArray)); // sampleArray = [1, 2, 3, 4]



// Implementa una función llamada excludeId tal que, dado un objeto como entrada, devuelva dicho 
// objeto clonado excepto la propiedad id si la hubiera.
// No modifiques el objeto de entrada. Piensa en destructuring y rest.
console.log("---------- excludeId ----------")

const excludeId = ({ id, ...rest }) => rest;

console.log(sampleObject);
console.log(excludeId(sampleObject));
//console.log(bookCollection);
//console.log(excludeId(bookCollection));



// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras como entrada, 
// devuelva otro array filtrado con aquellas palabras que empiecen por a.
// No utilices bucles.
console.log("---------- wordsStartingWithA ----------")
const wordList = ["pájaro", "arena", "playa", "araña", "pérgola"];

const wordsStartingWithA = words => words.filter(word => word[0] === "a");

console.log(wordList);
console.log(wordsStartingWithA(wordList));



// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y devuelva
// otro string con la concatenación de todos, separados por |.
// No utilices bucles.
console.log("---------- concat ----------")

const concat = (...words) => words.join("|");

console.log(concat("hueso", "clase", "perro"));



// Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro que 
// sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
// No utilices bucles.
console.log("---------- multArray ----------")

const multArray = ([...arr], mult) => arr.map(num => num * mult);

console.log(sampleArray);
console.log(multArray(sampleArray, 11)); // sampleArray = [1, 2, 3, 4]



// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva como 
// resultado el producto de todos ellos.
//  No utilices bucles.
console.log("---------- calcMult ----------")

const calcMult = (...numbers) => numbers.reduce((accTotal, num) => accTotal * num, 1);

console.log("numeros: ", 1,2,3,4,5,6)
console.log(calcMult(1,2,3,4,5,6))



// ##### EXTRA  ######################################################################################
// Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer 
// elemento ha sido intercambiado por el segundo.
// No modifiques el array de entrada original
console.log("---------- swapFirstSecond ----------")

const swapFirstSecond = ([firstElement, secondElement, ...rest]) => [secondElement, firstElement, ...rest];

console.log(sampleArray);
console.log(swapFirstSecond(sampleArray));

// Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así como 
// un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
// No utilices bucles. No accedas al primer carácter con corchetes ([]).

// const wordList = ["pájaro", "arena", "playa", "araña", "pérgola"];
console.log("---------- firstEqual ----------")

const firstEqual = (words, letterCondition) => words.filter(word => word.startsWith(letterCondition));

console.log(wordList);
console.log(firstEqual(wordList, "a")); // wordList = ["pájaro", "arena", "playa", "araña", "pérgola"];



// Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.
// No utilices bucles. Hay diversas formas de hacerlo
console.log("---------- longest ----------")

const longest = (...arr) => {

    const [firstElement, ...rest] = arr.sort((a, b) => b.length - a.length);

    return firstElement;

}
console.log("Arrays: ", [1,2], [1, 2, 3], [5 , 6 , 7 ,8])
console.log(longest([1,2], [1, 2, 3], [5 , 6 , 7 ,8]))



// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, 
// devuelva cuantas veces aparece dicho carácter en el string.
// No bucles
// Convierte el string a un array mediante Array.from().
console.log("---------- searchInStringV1 ----------")

const searchInStringV1 = (word, letter) => [...word].reduce((acc, char) => acc + (char==letter ? 1 : 0) , 0);

console.log("String: Bootcamp")
console.log("Count: 'o'");
console.log(searchInStringV1("Bootcamp", "o"))



// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.
// No bucles
// Convierte el string a un array mediante Array.from().
console.log("---------- searchInStringV2 ----------")

const searchInStringV2 = ([...word], letter) => word.filter(char => char == "o").length;

console.log("String: Bootcamp")
console.log("Count: 'o'");
console.log(searchInStringV2("Bootcamp", "o"))



// Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.
// No utilices bucles. No modifiques el string original de entrada.
// Convierte el string a un array mediante Array.from().
console.log("---------- sortCharacters ----------")

const sortCharacters = s => [...s].sort().join("");

console.log("String: cbda")
console.log(sortCharacters("cbda"))



// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras 
// concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
// No bucles\
console.log("---------- shout ----------")
const shout = (...words) => (words.join("!")+"!").toUpperCase()

console.log(shout("terminando","Bootcamp", "JavaScript"))



// Lista de la compra
// Dada la siguiente lista de la compra:
console.log("---------- shopping cart ----------")

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
console.log("---------- A ----------");

const addIVA = (ivaRate, cart) => 
    cart
    .map(product => ({...product, iva:+(product.price * ivaRate).toFixed(2)}))
    .map(product => ({ product: product.product, price: product.price, iva: product.iva }))

console.log(addIVA(0.21, shoppingCart));



// B. Ordena la lista de más a menos unidades.
console.log("---------- B ----------");

const sortProducts = cart => 
    cart
    .map(product => ({ product: product.product, units: product.units }))
    .sort((a,b) => b.units - a.units )

console.log(sortProducts(shoppingCart))

// C. Obtén el subtotal gastado en droguería.
console.log("---------- C ----------");

const productsPurchasedDrugstore = cart => 
    cart
    .filter(product => product.category == "Droguería")
    .reduce((totalPurchased, product)=> totalPurchased + (product.price * product.units), 0);

console.log(productsPurchasedDrugstore(shoppingCart))

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
console.log("---------- D ----------");

const showPurchasedProductTotals = cart => 
    cart
    .map(product => ({...product, iva:+(product.price * 0.21).toFixed(2)}))
    .map(product => ({...product, total:+((product.price+product.iva)*product.units).toFixed(2)}))
    .map(product => ({ product: product.product, total: product.total }))
    .map(product => console.log(product.product + " -> " + product.total + "€" ));
    

showPurchasedProductTotals(shoppingCart)