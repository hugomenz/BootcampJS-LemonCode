
// Desarrollo de la "formula" para generar un numero aleatorio dentro de un rango [min, max]

// Math.random()                      : valores decimales entre 0 y 1, y siempre menor que 1!
// Math.random() * 10                 : valores decimales entre 0 y 10 (sin cogerlo)
// Math.floor(Math.random() * 10)     : parte entera de los aleatorios dec. entre 0 y 9
// Math.floor(Math.random() * 11)     : parte entera de los aleatorios dec. entre 0 y 10
// Math.floor(Math.random() * 10) + 1 : parte entera de los aleatorios dec. entre 1 y 10
// Math.floor(Math.random() * 10) + 1 = Math.floor(Math.random() * ( 10 + 1 ) - 1) + 1

//Math.floor(Math.random() * ( 10 + 1 ) - 1) + 1 = 
// = Math.floor(Math.random() * ( max + 1 ) - min) + min


var randomPick = (n, min, max) => {
  arr = [];
  var randomNumber;

  while (arr.length < n ){
    randomNumber = Math.floor(Math.random() * ( ( max + 1 ) - min ) ) + min;

    // array empty --> push first random
    if ( arr.length === 0 ){
      arr.push(randomNumber);

    // array not empty, random number in array, new random needed
    }else if (arr.indexOf(randomNumber) > -1){
      randomNumber = Math.floor(Math.random() * ( ( max + 1 ) - min ) ) + min;

    // array not empty, random not in array --> push random
    }else{
      arr.push(randomNumber);
    }
    lastNumber = randomNumber;
  }
  return arr;
} 

console.log(randomPick(10, 1, 100));