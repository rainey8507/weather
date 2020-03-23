"use strict"

const url = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Oklahoma&appid=8f2718bde4ff4634f3ca8f1c0e831789"


$.ajax ({
    url: url,
     headers: {'X-Requested-With': 'XMLHttpRequest'},
    success:function (result){
        console.log(result);
        console.log(result.name);
        // output the location
        $("#location").text(result.name);

        // Display the temperature
        /*let F = Math.round(result.main.temp * (9/5) - 459.67);
        let displayTemp = `Temperature: ${F}&#176;F`;*/
        let F = Math.round(result.main.temp * (9/5) - 459.67);
        let Fahrenheit = F.toString();
        $("#temperature").text(Fahrenheit);

        let windSpeed = Math.round(result.wind.speed / .44704);
        let wind = windSpeed.toString();
        $("#wind").text(wind);

        $("#sky").text(result.weather[0].description);
    }
})