var getTypeRoom = () => document.getElementById( "room-type" ).options[document.getElementById( "room-type" ).selectedIndex].text.toLowerCase().replace(" suite","");
var getSizeRoom = () => document.getElementById( "room-size" ).options[document.getElementById( "room-size" ).selectedIndex].text.toLowerCase();

var firstWritingInputs = (event) => {
    if ( document.getElementById( event.target.id ).valueAsNumber == 0 ) {
        document.getElementById( event.target.id ).value = "" ;
    }
}

function getResult(){
    var selectedNumberNight = document.getElementById( "night-input" ).valueAsNumber;
    var parkingNumberNight = document.getElementById( 'parking-input' ).valueAsNumber;

    var typeRoom = getTypeRoom();
    var sizeRoom = getSizeRoom();
    var selectedSpa =  +document.getElementById( "option-spa" ).checked;
    var extraSpaRate = (selectedSpa == 1)  ?  20 : 0;

    var selectedOptionRate =  nightRate [typeRoom] + extraSpaRate;
    var typeDiscount = 1 + sizeRoomDiscount [sizeRoom];
    var parkingPriceBooking = parkingNumberNight * parkingNightRate;
    
    priceBooking = ( typeDiscount * selectedOptionRate * selectedNumberNight ) + parkingPriceBooking;

    document.getElementById( "result" ).innerHTML = priceBooking.toFixed(2) + "€" ;
}

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