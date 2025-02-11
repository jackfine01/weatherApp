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
    try{
        fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+city+'?key=2TC8FT4VR7JK57EJFDU2H92Z9'
        , {mode:'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response){
            console.log(response);
            let temp = response.currentConditions.temp
            let conditions = response.currentConditions.conditions;
            let datetime = response.currentConditions.datetime
            let feels = response.currentConditions.feelslike
            let humidity = response.currentConditions.humidity
            let precip = response.currentConditions.precip
            let precipprob = response.currentConditions.precipprob
            const data = new weatherData(temp, conditions, datetime, feels,humidity,precip,precipprob)
            console.log(data);
            weather = data;
            clearAll();
            createCard(weather.temp)
            createCard(weather.conditions)
            createCard(weather.datetime)
            createCard(weather.humidity)
            createCard(weather.precip)
            createCard(weather.precipprob)
        })
    }
    catch(er){
        console.log(er)
    }
};

function clearAll(){
    let cards = document.querySelectorAll('.card')
    cards.forEach(card => 
        card.remove()
    )
}
function createCard(text){
    const main = document.getElementById('main');
    const card = document.createElement('div');
    card.textContent = text;
    card.className = 'card';
    main.appendChild(card);
}

let search = 'washington';
let weather = new weatherData(callWeatherData(search))



const searchInput = document.getElementById('searchBar')
searchInput.addEventListener('input', () => {
    search = searchInput.value;
    console.log(search)
})

const getWeatherButton = document.getElementById('getWeatherButton');
getWeatherButton.addEventListener('click', () => {
    callWeatherData(search);
})