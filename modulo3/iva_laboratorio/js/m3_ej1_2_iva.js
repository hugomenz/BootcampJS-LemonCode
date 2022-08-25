console.log("# 2. Cálculo IVA usando funciones")

// poduct declarado en el fichero m3_ej1_1_iva.js
const product = { count: 3, price: 12.55, type: "ropa" };

function getTotal (product){
    // condicion cantidades negativas
    count = product.count < 0 ? 0 : product.count;

    totalAmount =  count * product.price;

    return totalAmount;
}

// función getVat usando if --> 4 lineas de codigo
function getVat(product){
    let typeVat = 0.21;

    if (product.type == "alimentacion") typeVat = 0.10;
    if (product.type == "libro") typeVat = 0.04;

    return typeVat;
}

// funcion usando switch - case --> 6 lineas de codigo
/* function getVat(product){
    let typeVat;

    switch(product.type){
        case "alimentacion": typeVat = 0.10; break;
        case "libro": typeVat = 0.04; break;
        default: typeVat = 0.21
    }

    return typeVat
} */

const vat = getVat(product)
var total =  (1 + vat) * getTotal(product);

console.log("Precio total sin iva: " + getTotal(product).toFixed(2) + "€");
console.log("Precio total con iva del " + vat*100 + "%. Total: " + total.toFixed(2) + "€");

console.log("-----------------------------------------------")