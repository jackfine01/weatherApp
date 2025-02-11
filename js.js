//Write the functions that hit the API. 
// You’re going to want functions that can take a location and return the weather data for that location. 
// For now, just console.log() the information.

function callWeatherData(city){
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+city+'?key=2TC8FT4VR7JK57EJFDU2H92Z9', {mode:'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        const weatherData = [];
        console.log(response);

        let temp = response.currentConditions.temp
        console.log(temp);
        weatherData.push(temp);

        let conditions = response.currentConditions.conditions;
        console.log(conditions);
        weatherData.push(conditions);

        let datetime = response.currentConditions.datetime
        console.log(datetime);
        weatherData.push(datetime);

        let feels = response.currentConditions.feelslike
        console.log(feels);
        weatherData.push(feels);

        let humidity = response.currentConditions.humidity
        console.log(humidity);
        weatherData.push(humidity);

        let precip = response.currentConditions.precip
        console.log(precip);
        weatherData.push(precip);

        let precipprob = response.currentConditions.precipprob
        console.log(precipprob);
        weatherData.push(precipprob);

        console.log(weatherData)
        return weatherData;
    })
};