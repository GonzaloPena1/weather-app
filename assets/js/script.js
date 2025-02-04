

const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";


document.getElementById("getWeather").addEventListener("click",function(e){

    let city = document.getElementById("city").value;
    let geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    fetch(geoURL)
        .then((response) => response.json())
        .then((data) => findLocation(data))
        .catch((error) => console.error("Fetch error:", error));

})

function findLocation(data) {

    console.log(data);

    let lat = data[0]["lat"];
    let lon = data[0]["lon"];

    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(weatherURL)
        .then((response) => response.json())
        .then((data) => findWeather(data))
        .catch((error) => console.error("Fetch error:", error));

}

function findWeather(data) {

    console.log(data);

}
