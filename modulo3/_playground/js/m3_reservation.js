

const booking1 = { count: 3, price: 127.95 };
const booking2 = { count: 5, price: 112.95 };

// ------------------------------------------------------------------------------
// ver si dos reservas son iguales
/* const condition = booking1.count == booking2.count && booking1.price == booking2.price

if (condition){
    console.log("Son iguales")
}else{
    console.log("No son iguales")
} */
// ------------------------------------------------------------------------------
// mostrar por pantalla la reserva con mayor numero de noches
/* const reservaConMayorNumeroNoches =
    booking1.count > booking2.count ? booking1 : booking2

console.log(reservaConMayorNumeroNoches) */

// ------------------------------------------------------------------------------
// ampliar numero de noches
const ampliarReserva = booking1.count++;

console.log(ampliarReserva, booking1.count)