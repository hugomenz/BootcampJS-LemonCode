
// --------------
// --  Validar que se informa con dos letras, y los números correspondientes.
// --------------

/* 
var iban = "ES6600190020961234567890";
const pattern = /^[A-Z]{2}[0-9]{22}$/

console.log(pattern.exec(iban)); 


// --------------
// --  Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
// --------------

var iban = "ES6600190020961234567890";
var iban2 = "ES66 0019 00209612 3456 7890";
const pattern = /^[A-Z]{2}\d{2}\s*\d{4}\s*\d{4}\s*\d{4}\s*\d{4}\s*\d{4}$/

console.log(pattern.test(iban));
console.log(pattern.test(iban2));
*/

// --------------
// --  Vamos a extraer el código de páis y el dígito de control.
// --------------

ibanList = ["ES1200190020961234567890", 
            "ES34 0019 0020 9612 3456 7890", 
            "ES560019002096",
            "ES780 0190020961234567890"
        ];

const patternCountryCode = /^[A-Z]{2}/
const patternCheckDigit = /(?<=[A-Z]{2})(\d{2})/

ibanList.forEach(iban => {
    console.log("")
    console.log("IBAN: ", iban );
    console.log("Country Code: ", patternCountryCode.exec(iban)[0] );
    console.log("Check Digit: ", patternCheckDigit.exec(iban)[0] );
    console.log("")
    console.log("-".repeat(30))
});

