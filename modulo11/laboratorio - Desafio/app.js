

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



class Booking{
    constructor(){
        this._bookingList = [];
        this._subtotal = 0;
        this._total = 0;
        // #######  E  X  T  R  A   ###############----------------
        this._priceList = {
            "standard" : 100,
            "suite": 150
        }
    }

    nightRate(tipoHabitacion){
        // #######  E  X  T  R  A   ###############----------------
        return (tipoHabitacion == "standard") ? this._priceList.standard : this._priceList.suite;
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

// #######  E  X  T  R  A   ###############----------------
class BookingNormal extends Booking{

}

class BookingTour extends Booking{
    nightRate(){
        return 100;
    }

    calculeSubtotal(){
        super.calculeSubtotal();
        this._subtotal = (1 - 0.15 ) * this._subtotal;
    }
}
// #######  E  X  T  R  A   ###############----------------

const reservaNormal = new BookingNormal();
reservaNormal.bookingList = reservas;

console.log("----- CASO 1 -----");
console.log(reservaNormal.subtotal);
console.log(+reservaNormal.total.toFixed(2));


const reservaTour = new BookingTour();
reservaTour.bookingList = reservas;

console.log("----- CASO 1 -----");
console.log(reservaTour.subtotal);
console.log(+reservaTour.total.toFixed(2));







