
// get number in the input field
function getNumber() {
    return +document.getElementById( "input-field" ).value;
}

// get selected operation operation
function getOperation( event ){  

    // get number from input after selecting a operation using the buttons
    inputNumber = getNumber();

    // initial state: typing first number and no operation is selected
    if ( lastSelectedOperation == undefined ){
        finalResult =  inputNumber;
    } 
    
    // case after get result: first operation after getting result using the 
    // button-result. It cleans the output to write the new number and update
    // the last selected operation
    if (lastSelectedOperation === "button-result") {
        writeOperationField("", "", "");
        
        cleanOutput();
        lastSelectedOperation = event.target.id;
    } 

    // executes operation 
    finalResult = executeOperation( inputNumber, lastSelectedOperation, finalResult );

    // updates the last selected operation
    lastSelectedOperation = event.target.id;   

    // gets symbol from the event string of last operation selected
    symbol = getSymbol(lastSelectedOperation)

    // write the operation below the result field
    writeOperationField(inputNumber, acc, symbol);

    // accumulates the string to see the operation till result is pressed
    acc = acc + inputNumber + symbol

    // clean input field after selecting a operation
    cleanInputField();

    // select the input field after selecting a operation to write again without clicking
    document.getElementById( "input-field" ).focus();
}

// execute operation using the input number with the selected operation and the last result
function executeOperation( inputNumber, lastSelectedOperation, finalResult ){
    if ( lastSelectedOperation == undefined ){
        return inputNumber;
    }else{
        switch ( lastSelectedOperation ) {
            case "button-addition": finalResult = finalResult + inputNumber; break;
            case "button-subtraction": finalResult = finalResult - inputNumber; break;
            case "button-multiplication": finalResult = finalResult * inputNumber; break;
            case "button-division": finalResult = finalResult / inputNumber; break;
          }
          return finalResult;
    }
}

function getResult(){
    // get number from input after selecting result button
    inputNumber = getNumber();
    
    // executes operation with the input number the last selected operation and the 
    // accumulated result, the final result. 
    finalResult = executeOperation( inputNumber, lastSelectedOperation, finalResult );

    // case pressing button result without selecting a operation. If the number selected is 2
    //  and no operation where selected, after pressing on equal, the final result is 2
    if ( lastSelectedOperation == undefined || lastSelectedOperation === "button-result") {
        finalResult = inputNumber;
    }

    // it shows the number in the output field
    document.getElementById( "output-number" ).innerHTML = finalResult;

    // updates operation field
    writeOperationField(inputNumber, acc, "");

    // update the last selected operation to button result
    lastSelectedOperation = "button-result";

    // input field and final result to zero
    restartCalculator();
}

// deletes the zero first time typing
function handlingWritingInput () {
    if ( getNumber() == 0 ){
        cleanInputField();
    }
}

// clear the output, the result field
function cleanOutput () {
    document.getElementById( "output-number" ).innerHTML = "";
}

function cleanInputField () {
    document.getElementById( "input-field" ).value = "";
}

function restartCalculator(){
    document.getElementById( "input-field" ).value = 0;
    finalResult = 0;
    acc = 0;
}

// returns symbol of the event string
function getSymbol( selectedOperation ){
    var symbolSelectedOperation;

    switch ( selectedOperation ) {
        case "button-addition": symbolSelectedOperation = "+"; break;
        case "button-subtraction": symbolSelectedOperation = "-"; break;
        case "button-multiplication": symbolSelectedOperation = "*"; break;
        case "button-division": symbolSelectedOperation = "/"; break;
        }
        return symbolSelectedOperation;
}

// updates the operation field
function writeOperationField(value, accumulator, symbol){
    
    if (lastSelectedOperation == undefined ||lastSelectedOperation === "button-result"){

        document.getElementById( "operation-field" ).innerHTML = value;

        accumulator = value;

    }else {
        document.getElementById( "operation-field" ).innerHTML = accumulator+value+symbol;
    }
}


// variables
var inputNumber;
var lastSelectedOperation;
var finalResult;
var acc = "";
var symbol;

// input starts with zero from the HTML
//<input class="four-spaces" id="input-field" type="number" value="0">

// Typing the first time needs to clean the input field and write the new number
document.getElementById("input-field").addEventListener("keydown", handlingWritingInput);

document.getElementById("button-addition").addEventListener("click", getOperation);
document.getElementById("button-subtraction").addEventListener("click", getOperation);
document.getElementById("button-multiplication").addEventListener("click", getOperation);
document.getElementById("button-division").addEventListener("click", getOperation);
document.getElementById("button-result").addEventListener("click", getResult);