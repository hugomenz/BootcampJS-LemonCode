/* addition = (num1, num2) => num1 + num2;
subtract = (num1, num2) => num1 - num2;
multiplication = (num1, num2) => num1 * num2;
division = (num1, num2) => num1 / num2; */

// PRIMERA PARTE : Una funcion para todo

/* function submitName() {
    var fullName;

    // Obtener nombre
    var name = document.getElementById("input-name").value;
    fullName = name;

    // Obtener apellido 1
    var surname1 = document.getElementById("input-surname1").value;
    fullName = fullName + " " + surname1;

    // Obtener apellido 2
    var surname2 = document.getElementById("input-surname2").value;
    fullName = fullName + " " + surname2;

    // Pintamos el nombre completo
    document.getElementById("full-name").innerText = fullName;   
}

// Registrar la funcion submitName como vent listener
// de el click del boton enviar
document.getElementById("button-submit").addEventListener("click", submitName); */


/* // SEGUNDA PARTE : Varias funciones para todo

function getName(){
    return document.getElementById("input-name").value;
}

function getSurname1(){
    return document.getElementById("input-surname1").value;
}

function getSurname2(){
    return document.getElementById("input-surname2").value;
}

function getFullName() {
    return getName() + " " + getSurname1() + " " + getSurname2();
}

function submitName() {
    document.getElementById("full-name").innerText = getFullName(); 
}

document.getElementById("button-submit").addEventListener("click", submitName) */


// TERCERA PARTE : Arrow function

/* var getName = () => document.getElementById("input-name").value;
var getSurname1 = () => document.getElementById("input-surname1").value;
var getSurname2 = () => document.getElementById("input-surname2").value;
var getFullName = () => getName() + " " + getSurname1() + " " + getSurname2();

var submitName = () => {
    document.getElementById("full-name").innerText = getFullName(); 
} 

document.getElementById("input-name").addEventListener("keyup", submitName)
document.getElementById("input-surname1").addEventListener("keyup", submitName)
document.getElementById("input-surname2").addEventListener("keyup", submitName) */