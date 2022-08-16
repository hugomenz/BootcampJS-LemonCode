
let iva = 0.21;
const product = { count: 3, price: 12.55, type: "ropa" };

if (product.type == "alimentacion") iva = 0.10;
if (product.type == "libro") iva = 0.04;

totalBrutto = ( 1 + iva ) * (product.count * product.price);

console.log(totalBrutto)