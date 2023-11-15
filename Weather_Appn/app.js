let weather = {
    apiKey:"a0cd60544a89e041bb90d2fab20c8880",
fetchWeather: function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=metric&appid=" 
        + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
},
    displayWeather: function(data) {
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in" + name;
        // document.querySelector(".icon").src "url " + icon + .png;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°c";
        document.querySelector(".humudity").innerText = "humidity: " + humidity + "%";
       document.querySelector(".wind").innerText = "wind speeed: " + speed + km/h;
        
    },
        search: function () {
            this.fetchWeather(document.querySelector(".search-bar").value);
        }
};

document
.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document
        .querySelector(".search-bar")
        .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }

});