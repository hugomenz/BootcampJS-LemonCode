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

newAvailability = new Array(8).fill(true);


var updateArrayRandom = (arr) => {
    
    // change atleast 2 positions of the given array
    var positionsToChange = Math.floor(Math.random() * ( arr.length - 2 ) + 2);

    for (let i = 0; i < positionsToChange; i++) {
        // select a random index in the total length of the array
        var randomIndex = Math.floor(Math.random() * arr.length );
        arr[randomIndex] = false;
    }
    return arr;
} 

var getRandomAvailability = () => {
    for (var worker of myTeam) {
        worker.availability = updateArrayRandom(worker.availability);
    }
}

getRandomAvailability = ();



