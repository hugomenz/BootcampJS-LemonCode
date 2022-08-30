// SOLUCION USANDO FOR LOOPS
console.log("--- SOLUCION USANDO FOR LOOPS ---");

var plainText = "Hola amigo";
var plainAlphabet = "aom";
var encryptedAlphabet = "sz*";
var cipherText = "";
var i, j = 0;
var letter = "";

for (i in plainText){
  letter = plainText[i]
  for (j in plainAlphabet){
    if (plainText[i] == plainAlphabet[j]){
      letter = encryptedAlphabet[j]
      continue;
    }
  }
  cipherText += letter
}
console.log(cipherText); // Hzls s*igz 