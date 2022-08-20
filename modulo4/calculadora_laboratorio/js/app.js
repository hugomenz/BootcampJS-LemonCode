// get number from left input
function getNumber1 () {
    return +document.getElementById("input-number1").value;
}

// get number from right input
function getNumber2 () {
    return +document.getElementById("input-number2").value;
}

// addition operation with validation for both numbers
function buttonAddition () {
    if ( getNumber1() == "" || getNumber2() == "" ){
        changeStyleInputField(); // changes field to red

        alert("Please fill the inputs!");
        return false;
    }else{
        document.getElementById("calculator-screen").innerHTML = getNumber1() + getNumber2();
        restoreStyleInputField();
    };
}

// subtraction operation with validation for both numbers
function buttonSubtraction () {
    if ( getNumber1() == "" || getNumber2() == "" ){
        changeStyleInputField(); // changes field to red
        
        alert("Please fill the inputs!");
        return false;
    }else{
        document.getElementById("calculator-screen").innerHTML = getNumber1() - getNumber2();
        restoreStyleInputField();
    };
}

// multiplication operation with validation for both numbers
function buttonMultiplication () {
    if ( getNumber1() == "" || getNumber2() == "" ){
        changeStyleInputField(); // changes field to red

        alert("Please fill the inputs!");
        return false;
    }else{
        document.getElementById("calculator-screen").innerHTML = getNumber1() * getNumber2();
        restoreStyleInputField();
    };
}

// division operation with validation for both numbers
function buttonDivision () {
    if ( getNumber1() == "" || getNumber2() == "" ){
        changeStyleInputField(); // changes field to red

        alert("Please fill the inputs!");
        return false;
    }else{
        document.getElementById("calculator-screen").innerHTML = getNumber1() / getNumber2();
        restoreStyleInputField();
    };
}

// When a input field is empty the border color changes to red
function changeStyleInputField(){
    if ( getNumber1() == "" ) {
        document.getElementById("input-number1").style.border = "2px solid red";
        document.getElementById("calculator-screen").innerHTML = "ERROR";
    }

    if ( getNumber2() == "" )  {
        document.getElementById("input-number2").style.border = "2px solid red";
        document.getElementById("calculator-screen").innerHTML = "ERROR";
    }
}

// When the input field is NOT empty change the border color to original again
function restoreStyleInputField () {
    document.getElementById("input-number1").style.border = "1px solid black";
    document.getElementById("input-number2").style.border = "1px solid black";
}

document.getElementById("button-addition").addEventListener("click", buttonAddition);
document.getElementById("button-subtraction").addEventListener("click", buttonSubtraction);
document.getElementById("button-multiplication").addEventListener("click", buttonMultiplication);
document.getElementById("button-division").addEventListener("click", buttonDivision);