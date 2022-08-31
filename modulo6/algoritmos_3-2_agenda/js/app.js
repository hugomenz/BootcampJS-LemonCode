
// Cuadrado
var square = (n, char) => {
    for (var i = 0; i < n; i++ ) console.log( char.repeat(n) );
}

console.log("=".repeat(40))
console.log("Cuadrado")
console.log("=".repeat(40))

console.log("------ n = 5 ------");
square(5, "*");
console.log("");

// Cuadrado con Borde
var squareWithBorder = (n, charBorder, charInner) => {
    for (var i = 0; i < n; i++ ) {
        if ( i == 0 || i == n-1 || n < 3 ){
            console.log( charBorder.repeat(n) );
        }else {
            console.log( charBorder + charInner.repeat(n-2) + charBorder )
        }
    }
}
console.log("=".repeat(40))
console.log("Cuadrado con Borde")
console.log("=".repeat(40))

console.log("------ n = 1 ------");
squareWithBorder(1, "B", "*");
console.log("");

console.log("------ n = 2 -----");
squareWithBorder(2, "B", "*");
console.log("");

console.log("------ n = 5 ------");
squareWithBorder(5, "B", "*");
console.log("");

// Cuadrado diagonal left-right
var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {

    for (var i = 0; i < n; i++ ) {
        console.log( charDown.repeat(i) + charDiagonal + charUp.repeat(n-i-1) )
    }
}
console.log("=".repeat(40))
console.log("Cuadrado diagonal left-right")
console.log("=".repeat(40))

console.log("------ n = 1 ------");
squareDiagonalLR(1, "\\", "A", "B");
console.log("");

console.log("------ n = 2 -----");
squareDiagonalLR(2, "\\", "A", "B");
console.log("");

console.log("------ n = 5 ------");
squareDiagonalLR(5, "\\", "A", "B");
console.log(""); 

// Cuadrado diagonal right-left
var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {

    for (var i = 0; i < n; i++ ) {
        console.log( charUp.repeat(n-i-1) + charDiagonal + charDown.repeat(i) )
    }
}

console.log("=".repeat(40))
console.log("Cuadrado diagonal right-left")
console.log("=".repeat(40))

console.log("------ n = 1 ------");
squareDiagonalLR(1, "/", "A", "B");
console.log("");

console.log("------ n = 2 ------");
squareDiagonalLR(2, "/", "A", "B");
console.log("");

console.log("------ n = 5 ------");
squareDiagonalLR(5, "/", "A", "B");
console.log("");
// Medio diamante
var halfDiamond = (n, char) => {
    for (var i = 0; i < n; i++ ) console.log( char.repeat(i + 1) );
    for (var i = 0; i < n; i++ ) console.log( char.repeat(n - i - 1) );
}

console.log("=".repeat(40))
console.log("Medio diamante")
console.log("=".repeat(40))

console.log("------ n = 1 ------");
halfDiamond(1, "*");
console.log("");

console.log("------ n = 2 ------");
halfDiamond(2, "*");
console.log("");

console.log("------ n = 5 ------");
halfDiamond(5, "*");
console.log("");

// Pirámide
var pyramid = (n, char) => {
    
    for (var i = 0; i < n; i++ ) {
        console.log( " ".repeat( n - i - 1 ) + char.repeat( i + 1 ) + char.repeat( i ));
    }
    
}

console.log("=".repeat(40))
console.log("Pirámide")
console.log("=".repeat(40))

console.log("------ n = 1 ------");
pyramid(1, "*");
console.log("");

console.log("------ n = 2 ------");
pyramid(2, "*");
console.log("");

console.log("------ n = 5 ------");
pyramid(5, "*");
console.log("");


// Diamante
var diamond = (n, char) => {
    for (var i = 0; i < n; i++ ) {
        console.log( " ".repeat( n - i - 1 ) + char.repeat( i + 1 ) + char.repeat( i ));
    }
    for (var i = 0; i < n - 1; i++ ) {
        console.log( " ".repeat( i + 1 ) + char.repeat( n - i - 1 ) + char.repeat( n - i - 2 ));
    }
}

console.log("=".repeat(40))
console.log("Diamante")
console.log("=".repeat(40))

console.log("------ n = 1 ------");
diamond(1, "*");
console.log("");

console.log("------ n = 2 ------");
diamond(2, "*");
console.log("");

console.log("------ n = 5 ------");
diamond(5, "*");
console.log("");