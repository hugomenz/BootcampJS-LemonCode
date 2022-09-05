const IVA = 0.21
const EXTRA_PERSON_RATE = 40;

const reservas = [
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        pax: 2,
        noches: 1
    }
];

// ---------------------------------------------------------------
// CASO 1
// ---------------------------------------------------------------
class Booking{
    constructor(){
        this._bookingList = [];
        this._subtotal = 0;
        this._total = 0;
    }

    nightRate(tipoHabitacion){
        return (tipoHabitacion == "standard") ? 100 : 150;
    }

    paxRate(pax){
        return (pax > 1) ? ((pax - 1) * EXTRA_PERSON_RATE) : 0;  
    }

    calculeSubtotal(){
        this._subtotal = 
            this._bookingList
            .reduce((acc, {tipoHabitacion, pax, noches}) => 
                acc + (pax * noches * this.nightRate(tipoHabitacion)) + ( noches * this.paxRate(pax) ), 0);
    }

    calculeTotal(){
        this._total = ( 1 + IVA ) * this._subtotal;
    }

    get subtotal (){
        return this._subtotal;
    }

    get total (){
        return this._total;
    }

    set bookingList(bookingListExt){
        this._bookingList = bookingListExt;
        this.calculeSubtotal();
        this.calculeTotal();
    }
}


const nuevaReserva = new Booking();
nuevaReserva.bookingList = reservas;


console.log("----- CASO 1 -----");
console.log(nuevaReserva.subtotal);
console.log(+nuevaReserva.total.toFixed(2));

// ---------------------------------------------------------------
// CASO 2
// ---------------------------------------------------------------
class BookingTour extends Booking{
    nightRate(){
        return 100;
    }

    calculeSubtotal(){
        super.calculeSubtotal();
        this._subtotal = (1 - 0.15 ) * this._subtotal;
    }
}


const reservaTour = new BookingTour();
reservaTour.bookingList = reservas;

console.log("----- CASO 2 -----");
console.log(reservaTour.subtotal);
console.log(+reservaTour.total.toFixed(2));