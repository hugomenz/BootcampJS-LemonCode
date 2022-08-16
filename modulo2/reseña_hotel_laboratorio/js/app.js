// Info Hotel

// var hotel = {
//     name: "Mencey",
//     location: "Tenerife",
//     img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
// };

// document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
// document.getElementById("location-hotel").innerHTML = "Ubicado en " + hotel.location;
// document.getElementById("img-hotel").src = hotel.img;

// // Review
// var rating = prompt("Puntuación del 1 al 5");
// document.getElementById("rating").innerHTML = rating + " estrellas";

// // Checkbox Anónimo
// var anonymous = confirm("¿Quiere que la reseña sea anónima?");
// document.getElementById("anonymous").checked = anonymous;

// --------------------------------------------------------------------

// Info hoteles
var hoteles = {
    Mencey : {
        name: "Mencey",
        location: "Tenerife",
        img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg"
    },
    Lani : {
        name: "Lani's Suites Deluxe",
        location: "Lanzarote",
        img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg"
    }
}

// Hotel selection
var selectedHotel = prompt("Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani");

document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

// // Review
// var rating = prompt("Puntuación del 1 al 5");
// document.getElementById("rating").innerHTML = rating + " estrellas";

// Checkbox Anónimo
var anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;

// --------------------------------------------------------------------

// Review
var rating = prompt("Puntuación del 1 al 5");

var stars = {
    "1": "<span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    "2": "<span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span><span>&#9734</span>",
    "3": "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span><span>&#9734</span>",
    "4": "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9734</span>",
    "5": "<span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span>"
}

document.getElementById("rating").innerHTML = stars[rating];