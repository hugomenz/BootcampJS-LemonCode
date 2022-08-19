const booking = { count: 3, price : 127.95 };

const discount = 20;

const total = booking.count * booking.price;

totalDiscount = (1 - discount/100) * total;

if (total > 500){    

    saved = total - totalDiscount;

    console.log("Precio total: " + total + "€");
    console.log("Se aplica un descuento del 20% ( " + saved.toFixed(2) + "€ )");

}else {
    console.log("No se aplica descuento. Descuento del 20% a partir de 500€")
}

console.log("El precio final es de: " + totalDiscount.toFixed(2) + "€");

// ------------------------------------------------------------------------------
/* 
const booking = { count: 5, price : 127.95 };

let total = booking.count * booking.price;

discount = total * 0.2;

total = total > 500 ? total - discount : total;

console.log("El precio final es de: " + total + "€");
 */
