function textEncryption(plainText, plainAlphabet, encryptedAlphabet){
  var cipherText = "";
  
  for (letter of plainText){
    if ( plainAlphabet.indexOf(letter.toLowerCase()) > -1 ){
      cipherText += encryptedAlphabet[plainAlphabet.indexOf(letter.toLowerCase())];
    }else{
      cipherText += letter;
    }
  } 
  return cipherText;
}

var enigmaENcryption = () => {
  var plainText = document.getElementById("plain-text").value;
  document.getElementById("cipher-text").value = textEncryption(plainText, plainAlphabet, encryptedAlphabet)
}

var enigmaDEcryption = () => {
  var cipherText = document.getElementById("cipher-text").value;
  console.log(cipherText)
  document.getElementById("plain-text").value = textEncryption(cipherText, encryptedAlphabet, plainAlphabet)
}

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";