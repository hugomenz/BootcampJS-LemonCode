var getNumberNight = () => +document.getElementById( "night-input" ).value;
var getParkingNumberNight = () => +document.getElementById( 'parking-input' ).value;
var getTypeRoom = () => document.getElementById( "room-type" ).options[document.getElementById( "room-type" ).selectedIndex].text.toLowerCase().replace(" suite","");
var getSizeRoom = () => document.getElementById( "room-size" ).options[document.getElementById( "room-size" ).selectedIndex].text.toLowerCase();
var getSpaStatus = () => +document.getElementById( "option-spa" ).checked;
var writePriceField = (result) => document.getElementById( "result" ).innerHTML = result;

var cleanNightInputField = () => document.getElementById( 'night-input' ).value = ""; 
var cleanParkingInputField = () => document.getElementById( 'parking-input' ).value = ""; 
var handlingWritingNightInput = () => { if ( getNumberNight() == 0 ) cleanNightInputField() };
var handlingWritingParkingInput = () => { if ( getParkingNumberNight() == 0 ) cleanParkingInputField() };

/* function getBookingPrice( typeRoom, sizeRoom, extraSpaRate, selectedNumberNight, parkingNumberNight ){
    // spa selected = true
    var selectedOptionRate =  nightRate [typeRoom] + extraSpaRate;
    var typeDiscount = 1 + sizeRoomDiscount [sizeRoom];
    var parkingPriceBooking = parkingNumberNight * parkingNightRate;
    
    priceBooking = ( typeDiscount * selectedOptionRate * selectedNumberNight ) + parkingPriceBooking;
    
    return priceBooking;
}

function getResult(){
    var selectedNumberNight = getNumberNight();
    var parkingNumberNight = getParkingNumberNight();
    var typeRoom = getTypeRoom();
    var sizeRoom = getSizeRoom();
    var selectedSpa = getSpaStatus();
    var extraSpaRate = (selectedSpa == 1)  ?  20 : 0;

    finalResult = getBookingPrice( typeRoom, sizeRoom, extraSpaRate, selectedNumberNight, parkingNumberNight );
    
    writePriceField( finalResult.toFixed(2) + "€" );
} */

//// DESPUES DE LA REVISION


function getResult(){
    var selectedNumberNight = getNumberNight();
    var parkingNumberNight = getParkingNumberNight();
    var typeRoom = getTypeRoom();
    var sizeRoom = getSizeRoom();
    var selectedSpa = getSpaStatus();
    var extraSpaRate = (selectedSpa == 1)  ?  20 : 0;

    var selectedOptionRate =  nightRate [typeRoom] + extraSpaRate;
    var typeDiscount = 1 + sizeRoomDiscount [sizeRoom];
    var parkingPriceBooking = parkingNumberNight * parkingNightRate;
    
    priceBooking = ( typeDiscount * selectedOptionRate * selectedNumberNight ) + parkingPriceBooking;

  /*   finalResult = getBookingPrice( typeRoom, sizeRoom, extraSpaRate, selectedNumberNight, parkingNumberNight ); */
    writePriceField( priceBooking.toFixed(2) + "€" );
}



///////////////////////////
// variables
var nightRate = {
    standard:100,
    junior:120,
    suite:150
};

var sizeRoomDiscount = {
    individual: -0.25,
    doble: 0,
    triple: 0.25
};

var parkingNightRate = 10

document.getElementById("night-input").addEventListener("keydown", handlingWritingNightInput);
document.getElementById("parking-input").addEventListener("keydown", handlingWritingParkingInput);

document.getElementById("room-type").addEventListener("change", getResult);
document.getElementById("room-size").addEventListener("change", getResult);
document.getElementById("option-spa").addEventListener("change", getResult);
document.getElementById("night-input").addEventListener("change", getResult);
document.getElementById("parking-input").addEventListener("change", getResult);

