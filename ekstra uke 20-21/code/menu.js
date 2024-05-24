
const mybtn = document.getElementById('myList');
const tre = document.getElementById('btn');
const søk = document.getElementById('searchbar').addEventListener('click', show_me)
tre.addEventListener("click", openmenu );
function openmenu() {
    if(mybtn.style.display != 'block') {
        mybtn.style.display = 'block';
    } else {
        mybtn.style.display = 'none';
    }
    console.log('clicked');
}

// map settings
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

var map = L.map('map1').setView([38.845354, -100.508986], 4);        //Her byttet jeg koordinater og zoom slik at den viser amerika
//let marker = L.marker([35.117286, -106.534438]).addTo(map)
let tileURL =   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { }).addTo(map);
const tiles =L.tileLayer(tileURL,{attribution})
let place = document.getElementById("searchbar").value;
//const api_url = 'https://nominatim.openstreetmap.org/search?format=json&q=' + place; 
console.log(place);


async function show_me(){

    /*let place = document.getElementById('searchbar').value;
    let response = await fetch("https://api.openbrewerydb.org/v1/breweries?by_state=california&per_page=3")
    let D_ata = await response.json();*/
    /*console.log(data);
    data.forEach(element => {
        if (element.latitude && element.longitude) { // Check if coordinates exist
            let marker = L.marker([element.latitude, element.longitude]).addTo(map);
            marker.bindPopup(`<b>${element.name}</b><br>${element.latitude}  ${element.longitude}`).openPopup();
        }
    });*/

    //let response = await fetch("https://api.openbrewerydb.org/v1/breweries?per_page=3");
    //let stater = await fetch("https://api.openbrewerydb.org/v1/breweries?page=15&per_page=100") 
    let stater = await fetch("https://api.openbrewerydb.org/v1/breweries?page=15&per_page=800");
    //let response = await fetch('https://api.openbrewerydb.org/breweries');
    let data = await stater.json();
    console.log(data);
    data.forEach(element => {

        if(element.latitude != null || element.longitude!=null){


            console.log(element.latitude);
            let marker = L.marker([element.latitude, element.longitude]).addTo(map);
            marker.bindPopup(`<b>${element.name}</b><br>${element.latitude}  ${element.longitude}`).openPopup();
        }
    });
}

//const stater = "https://api.openbrewerydb.org/v1/breweries?by_state=california&per_page=3" + place;

//const my_brews = "https://api.openbrewerydb.org/v1/breweries?per_page=3"

/*async function brew_url(my_brews){

    let response = await fetch(my_brews);
    let data = await response.json();
    return data;
    let markerte = L.marker(my_brews).addTo(map)
}*/