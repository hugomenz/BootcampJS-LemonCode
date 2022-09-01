var getRightMoneyType = (num, value) => {
    if ( value > 0 && value < 5) {
        return num == 1 ? " moneda de " : " monedas de ";
    } else if (value >= 5){
        return num == 1 ? " billete de " : " billetes de ";
    }
}

var getOptimalChange = (price, paidAmount) => {
    var change = paidAmount - price;
    console.log("Cantidad a devolver: ", change)

    for (let i = cashRegister.length - 1; i >= 0; i--) {
        var remainder = change / cashRegister[i];

        if ((Math.floor(Math.round(remainder*100)/100)) > 0) {


            console.log( Math.floor(Math.round(remainder*100)/100)                                      // number coins || bills
                        + getRightMoneyType(Math.floor(remainder), cashRegister[i]) // moneda, monedas, billete, billetes
                        + cashRegister[i]                                           // right value
                        + (cashRegister[i] != 1 ? " euros" : " euro"));             // euro || euros

            change = change - ( Math.floor(Math.round(remainder*100)/100) * cashRegister[i] );
        }
    }
}

//
// Program starts
//

cashRegister = [ 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200 ];

var purchasedAmount = 87.23;
var customerPayment = 200;

getOptimalChange(purchasedAmount, customerPayment);