var ciudades = ["Bali", "Roma", "Berlín"];


// anadir elemento al final
ciudades.push("Rio");
console.log(ciudades);

// anadir elemento al principio
ciudades.unshift("Stuttgart");
console.log(ciudades);

// saca el ultimo elemento de la lista y lo devuelve
var ultimoElemento = ciudades.pop();
console.log(ciudades);
console.log(ultimoElemento);

// obtiene el indice de 
var index = ciudades.indexOf("Roma");
console.log(index);

// devuelve un pezado del array splice y lo elimina del prinicipal
var elementosEliminados = ciudades.splice(1,3)
console.log(ciudades);
console.log(elementosEliminados);

