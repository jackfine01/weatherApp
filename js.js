//Write the functions that hit the API. 
// You’re going to want functions that can take a location and return the weather data for that location. 
// For now, just console.log() the information.
function weatherData(temp, conditions,datetime,feels,humidity,precip,precipprob){
    this.temp = temp,
    this.conditions = conditions,
    this.datetime = datetime,
    this.feels = feels
    this.humidity = humidity
    this.precip = precip
    this.precipprob = precipprob
}
function callWeatherData(city){
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+city+'?key=2TC8FT4VR7JK57EJFDU2H92Z9', {mode:'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        console.log(response);
        let temp = response.currentConditions.temp
        // console.log(temp);
        let conditions = response.currentConditions.conditions;
        // console.log(conditions);
        let datetime = response.currentConditions.datetime
        // console.log(datetime);
        let feels = response.currentConditions.feelslike
        // console.log(feels);
        let humidity = response.currentConditions.humidity
        // console.log(humidity);
        let precip = response.currentConditions.precip
        // console.log(precip);
        let precipprob = response.currentConditions.precipprob
        // console.log(precipprob);
        const data = new weatherData(temp, conditions, datetime, feels,humidity,precip,precipprob)
        return data;
    })
};

let search = 'washington';
let weather = callWeatherData(search);
console.log(weather)

const searchInput = document.getElementById('searchBar')
searchInput.addEventListener('input', () => {
    search = searchInput.value;
    console.log(search)
})

const getWeatherButton = document.getElementById('getWeatherButton');
getWeatherButton.addEventListener('click', () => {
    callWeatherData(search);
})