var getRandomAvailability = () => {
    for (var worker of myTeam) {
        arr = worker.availability;
        // select number of positions to change
        var positionsToChange = Math.floor(Math.random() * ( arr.length - 2 ) + 2);

        for (let i = 0; i < positionsToChange; i++) {
            // select a random index in the total length of the array to make it false
            var randomIndex = Math.floor(Math.random() * arr.length );
            arr[randomIndex] = false;
        }
    }
}

var printTeamSchedule = () => {
    for (worker of myTeam) {
        console.log("Disponibilidad de ", worker.name);
        for (let i = 0; i < WORK_HOURS.length; i++) {
            console.log(WORK_HOURS[i] + " " + (worker.availability[i] ? "Si" : "No"));
        }
    }
}

var checkArrayEqual = arr =>  (new Set(arr).size === 1);


var getFreeSchedule = () => {
    tempArray = [];
    var numberFreeSchedule = 0;
    
    for (let i = 0; i < WORK_HOURS.length; i++) {
        
        for (worker of myTeam){
            tempArray.push(worker.availability[i]);

        }// with (worker.availability[i] ) the "all false" array is discarded
        if ( checkArrayEqual(tempArray)  && worker.availability[i] ){
            console.log("Hueco encontrado en el horario " + WORK_HOURS[i]);
            numberFreeSchedule += 1; 
        }
        tempArray = [];
    }
    if ( numberFreeSchedule == 0 ){
        console.log("Lo siento. No hay hueco disponible en el equipo.");
    }
}

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

// 
// Program starts
//

// modify arrray my team with a random availability array for every worker of the team
getRandomAvailability();

console.log("1. Generación aleatoria de la disponibilidad");
printTeamSchedule();

console.log("---- 2. Buscar hueco libre ----");
getFreeSchedule();

