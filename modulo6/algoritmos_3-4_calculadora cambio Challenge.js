var getRightMoneyType = (num, value) => {
    if ( value > 0 && value < 5) {
        return num == 1 ? " moneda de " : " monedas de ";
    } else if (value >= 5){
        return num == 1 ? " billete de " : " billetes de ";
    }
}

var getRightMoneyName = value => {
    if (value > 1) {
        return " euros";
    } else if (value == 1) {
        return " euro";        
    } else{
        return " centimos de euro";
    }
}

var getOptimalChange = (price, paidAmount) => {

    var change = paidAmount - price;
    var counter = 0;

    // read every coin type and note type from the cash register
    for (let i = cashRegister.length - 1; i >= 0; i--) {

        // rest from the division between the actual value to return and the actual note or coin
        var remainder = (Math.round(change*100)/100) / cashRegister[i].value;

        // check if the amount of the actual note/coin is enough for the remainder
        for (let j = cashRegister[i].amount; j > 0 ; j--) {
            
            if ((Math.floor(Math.round(remainder*100)/100)) > 0 && cashRegister[i].amount > 0) {
                counter++; // 
            }
        // at the end of this loop we "take" one note/coin, and save it in a counter and try it again
        }

        // once the loop is completed, the counter if checked
        // if the counter is not zero, means, we took money from the cash register
        if (counter != 0){
            // if we need 4 BUT there are only 2 THEN we take 2
            // if we need 2 BUT there are only 4 THEN we take 2
            change = change - ( (Math.floor(Math.round(remainder*100)/100)>counter ? counter : Math.floor(Math.round(remainder*100)/100)) * cashRegister[i].value );
            
            console.log((counter > Math.floor(remainder) ? Math.floor(remainder) :  counter)  // number coins || bills
            + getRightMoneyType((remainder > counter ? counter :  Math.floor(Math.round(remainder*100)/100)), cashRegister[i].value) // moneda, monedas, billete, billetes
            + cashRegister[i].value  // right value
            + getRightMoneyName(cashRegister[i].value) ); // euro || euros
            
            // we will start counting the next note/coin --> counter to zero again
            counter = 0;
        }
    }
    if ((Math.round(change*100)/100) > 0.01 &&  (Math.round(change*100)/100) < (paidAmount - price)){
        console.log("Lo siento, no tengo mas dinero para devolver, te faltarían ", Math.round(change*100)/100 + "euros");
    }else if(change == (paidAmount - price)){
        console.log("Uy! no tengo nada de dinero en la caja")
    }
}

var getRandomCashAvailability = (n, register) => {
    for (type of register){
        type.amount = Math.floor(Math.random() * ( n + 1 ) )
    }
    return register;
}

//
// Program starts
//

cashRegister = [ 
    { "value" : 0.01, "amount": 0 },
    { "value" : 0.02, "amount": 0 },
    { "value" : 0.05, "amount": 0 },
    { "value" : 0.1, "amount": 0 },
    { "value" : 0.2, "amount": 0 },
    { "value" : 0.5, "amount": 0 },
    { "value" : 1, "amount": 0 },
    { "value" : 2, "amount": 0 },
    { "value" : 5, "amount": 0 },
    { "value" : 10, "amount": 0 },
    { "value" : 20, "amount": 0 },
    { "value" : 50, "amount": 0 },
    { "value" : 100, "amount": 0 },
    { "value" : 200, "amount": 0 },
];

var purchasedAmount = 87.23;
var customerPayment = 200;

// update the amount for every value with a random number between 0 and 5
cashRegister = getRandomCashAvailability(5, cashRegister);
console.log( cashRegister )

getOptimalChange(purchasedAmount, customerPayment);