// SOLUCION USANDO FUNCION
console.log("--- SOLUCION USANDO FUNCION ---")

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

var plainText = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)"
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

console.log(textEncryption(plainText, encryptedAlphabet, plainAlphabet));