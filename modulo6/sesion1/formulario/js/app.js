// 1. Full name validation
// - El nombre no este vacío, que no sea null, que no sea undefined
// - Debe tener una longitud minima de 5 caracteres

var isValidFullName = fullname => fullname && (fullname.length >= 5);

// - Obtener el nombre que ha introducido el usuario
// - Validar ese nombre
// - Si es invalido => Aplicamos regla CSS para error sobre el input
// - Si es valido => No aplicamos regla CSS (la eliminamos)

// 2. Birthdate validation
// - Year. Mayor que 1850. Menor o igual que el año actual.
// - Month. Entre 1 y 12.
// - Dias. Maximo 30 o 31 segun el mes, con la excepcion de febrero que sera 28 o 29 (segun ano)
var isValidYear = year => year && year >= 1850 && year <= new Date().getFullYear();
var isValidMonth = month => month && month >= 1 && month <= 12;
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var monthLength = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day > 0 && day <= monthLength[month - 1];
}
var splitDateInParts = date => {
    var parts = date.split("/");
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
}

var isValidDate = date => {
    if (date.length < 8 || date.length > 10) return false;
    var parts = splitDateInParts(date);
    var validYear = isValidYear(parts[2]);
    var validMonth = isValidMonth(parts[1]);
    var validDay = isValidDay(parts[0], parts[1], parts[2]);

    return validDay && validMonth & validYear;
}

// 3. DNI Validation
var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";
var isValidDNILetter = (dniLetter, dniNumber) => DNI_LETTERS[dniNumber % 23] === dniLetter;
var isValidDNINumber = number => number >= number >= 0 && number <= 99999999;

var isValidDNI = dni => {
    if (dni.length !== 9) return false;
    // 123456789H
    var dniNumber = dni.slice(0,8);
    var dniLetter = dni.slice(8,9);

    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
}

// 4. Mobile Validation
var isValidMobile = mobile => {
    return(
        mobile &&
        parseInt(mobile) &&
        (mobile.startsWith(9) || mobile.startsWith(8) || mobile.startsWith(7) || mobile.startsWith(6))
    );
}

var validateInput = (id, validationFunction) => {
    var inputField = document.getElementById(id);
    var valid = validationFunction(inputField.value);

    if (valid) {
        inputField.classList.romove("error");
    }else {
        inputField.classList.add("error");
    }
    return valid;
}

document
.getElementById("register")
.addEventListener("submit", validateForm, true);


function validateForm(event) {
    console.log("COMIENZA PROCESO VALIDACIÓN");
}

// 5. General algorith

var validateForm = (event) => {
    event.preventDefault();

    validateInput("fullName", isValidFullName);
    validateInput("birthday", isValidDate);
    validateInput("dni", isValidDNI);
    validateInput("mobile", isValidMobile)
};

// Events
document.getElementById("register").addEventListener("submit", validateForm);