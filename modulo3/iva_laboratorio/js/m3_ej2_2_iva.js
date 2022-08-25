console.log("# 3. Ejercicio 2-2 Avanzado. Cálculo IVA usando getTotalVat y printProductPrice")

// poduct declarado en el fichero m3_ej1_1_iva.js
const product = { count: 3, price: 12.55, type: "ropa" };

function getTotal (product){
    totalAmount =  product.count * product.price;

    return totalAmount;
}

function getVat(product){
    let typeVat = 0.21;

    if (product.type == "alimentacion") typeVat = 0.10;
    if (product.type == "libro") typeVat = 0.04;

    return typeVat;
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
  }

function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product) * product.price;
    const total = subtotal + vat;
  
    console.log("Precio total sin iva: :", subtotal.toFixed(2) + "€");
    console.log(`IVA (${getVat(product)*100}%): `, vat.toFixed(2) + "€");
    console.log(`Precio total con iva del ${getVat(product)*100}%:`, total.toFixed(2) + "€");
}

console.log(printProductPrice(product));

console.log("-----------------------------------------------");