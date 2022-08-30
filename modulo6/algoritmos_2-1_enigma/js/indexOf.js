// SOLUCION USANDO INDEXOF
console.log("--- SOLUCION USANDO INDEXOF ---")

var plainText = "Hola amigo";
var plainAlphabet = "aom";
var encryptedAlphabet = "sz*";
var cipherText = "";

for (letter of plainText){
  if ( plainAlphabet.indexOf(letter.toLowerCase()) > -1 ){
    cipherText += encryptedAlphabet[plainAlphabet.indexOf(letter.toLowerCase())];
  }else{
    cipherText += letter;
  }
} 
console.log(cipherText) // Hzls s*igz 