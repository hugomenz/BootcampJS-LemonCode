// id: booking identification number
// price: night rate
// count: number of nights
// room: room type
// prepaid: true/false paid when booking
// sicceeded: true/false check if booking was ok without errors

const bookings = [
    { id: 1, price: 45.30, count: 3, room: "standard", prepaid: false,
   succeeded: true },
    { id: 2, price: 92.45, count: 4, room: "superior", prepaid: false,
   succeeded: true },
    { id: 3, price: 63.50, count: 7, room: "standard", prepaid: true,
   succeeded: false },
    { id: 3, price: 37.50, count: 2, room: "standard", prepaid: true,
   succeeded: true },
    { id: 5, price: 87.90, count: 5, room: "superior", prepaid: true,
   succeeded: false }
   ];
   
var booking;

// list all bookings
for (booking of bookings) {
    imprimir(booking);
   }
   

function imprimir(booking) {
    console.log("-----------------");
    for (attr in booking){
        console.log(attr.toUpperCase() + " :" + booking[attr]);
    }

}
   