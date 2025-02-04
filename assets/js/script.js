

const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";


document.getElementById("getWeather").addEventListener("click",function(e){
    console.clear();
    let city;
    if(document.getElementById("city").value == "")
    {city = "London"}// default
    else
    {city = document.getElementById("city").value;}
    let geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    fetch(geoURL)
        .then((response) => response.json())
        .then((data) => findLocation(data))
        .catch((error) => console.error("Fetch error:", error));

})

function findLocation(data) {

    console.log(data);
    data = data[0];

    if(data["name"]=="London")
    {
        navigator.geolocation.getCurrentPosition(findCurrentLocation)
    }
    else
    {
        console.log(data["lat"])
        console.log(data["lon"])
        findWeather(data["lat"],data["lon"]);
    }

}

function findCurrentLocation(position)
{
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    findWeather(position.coords.latitude,position.coords.longitude);
}

function findWeather(lat,lon) {
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(weatherURL)
        .then((response) => response.json())
        .then((data) => outputWeather(data))
        .catch((error) => console.error("Fetch error:", error));

}

function outputWeather(data) {

    console.log(data);

}
