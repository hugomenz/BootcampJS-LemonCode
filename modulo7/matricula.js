/* 
// --------------
// --  Caso 1  --
// --------------

const pattern = /([0-9]{4}).([A-Z])+/

matriculaList = [ "2021 GMD", "2345-GMD", "4532BDB", "0320-AAA" ]

matriculaList.forEach(matricula => {
    console.log(matricula, pattern.test(matricula));
});
 */

// --------------
// --  Caso 2  --
// --------------

const patternNumeric = /([0-9]{4})/;
const patternLetter = /(?<=\d{4}.?)([A-Z]{3})/;

matriculaList = [ "2021 GMD", "2345-GMD", "4532BDB", "0320-AAA" ]

matriculaList.forEach(matricula => {
    console.log("")
    console.log("Plate number: ", matricula );
    console.log("Numeric Part: ", patternNumeric.exec(matricula)[0] );
    console.log("Plate letters: ", patternLetter.exec(matricula)[0] );
    console.log("")
    console.log("-".repeat(30))
});