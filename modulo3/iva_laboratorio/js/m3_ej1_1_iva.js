console.log("# Ejercicio 1_1. Calculo de iva total")

let iva = 0.21;
const product = { count: 3, price: 12.55, type: "ropa" };

if (product.type == "alimentacion") iva = 0.10;
if (product.type == "libro") iva = 0.04;

// condicion cantidades negativas
count = product.count < 0 ? 0 : product.count;

totalNetto = count * product.price;
totalBrutto = ( 1 + iva ) * (count * product.price);

console.log("Precio total sin iva: " + totalNetto.toFixed(2) + "€");
console.log("Precio total con iva del " + iva*100 + "%. Total: " + totalBrutto.toFixed(2) + "€");

console.log("-----------------------------------------------")