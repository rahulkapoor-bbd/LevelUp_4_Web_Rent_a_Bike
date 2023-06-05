// // let jhb = document.getElementById('jhb-weather');
// // jhb.innerText = "Hello!!"
// const resultElements = document.getElementsByClassName('weather');
// const cities = ['cpt', 'jhb', 'dbn'];
// const url = `https://wttr.in/${city}?format=1`;

// const getWeatherInfo = async (city) => {
    
//     const res = await fetch(url);
//     let data = res.json();
//     let elem = document.getElementById(city);
//     elem.innerText = data.temperature;
// }

// cities.forEach(async (city) => {
//     console.log('each');
//     await getWeatherInfo(city)
// });

// async function getWeather(url = "https://forecast9.p.rapidapi.com/rapidapi/forecast/" + city + "/summary/", data = {}) {
//     const response = await fetch(url, {
//         method: "GET",
//         cors: "same-origin",
//         headers: {
//             'X-RapidAPI-Key': 'a134443e42msh9b4266d1496f86dp173dcbjsn4a8e740a120b',
//             'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
//         },
//         redirect: "manual",
//         referrerPolicy: "no-referrer",
//         body: JSON.stringify(data),
//     });

//     return response.json();
// }

//http://api.weatherapi.com/v1/current.json?key=429862a5dd114917853184338232605&q=Johannesburg&aqi=no

//let destination = 'Johannesburg';

function fetchCityInfo(targetCity, elementId){
    let url = `http://api.weatherapi.com/v1/current.json?key=429862a5dd114917853184338232605&q=${targetCity}&aqi=no`;

    return fetch(url).then(res => res.json()).then(data => {
        console.log(data);

        let cityName = document.getElementById(`${elementId}`);
        
        cityName.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`
    });
}

fetchCityInfo('Cape Town', 'cpt');
fetchCityInfo('Johannesburg', 'jhb');
fetchCityInfo('Durban', 'dbn');

function fetchWeather(targetDestination, elementId){
    let url = `http://api.weatherapi.com/v1/current.json?key=429862a5dd114917853184338232605&q=${targetDestination}&aqi=no`;

    return fetch(url).then(res => res.json()).then(data => {
        console.log(data);

        let cityCC = document.getElementById(`${elementId}_CC`);
        let cityCT = document.getElementById(`${elementId}_CT`);
        let cityFL = document.getElementById(`${elementId}_FL`);
        let cityCW = document.getElementById(`${elementId}_CW`);
        let cityUV = document.getElementById(`${elementId}_UV`);
        
        cityCC.innerText = `Cloud Coverage: ${data.current.condition.text}`;
        cityCT.innerText = `Current Temperature: ${data.current.temp_c}°C`;
        cityFL.innerText = `Feels Like: ${data.current.feelslike_c}°C`;
        cityCW.innerText = `Current Windspeed: ${data.current.wind_kph} KM/H, ${data.current.wind_dir} ${data.current.wind_degree}°`;
        cityUV.innerText = `Current UV Index: ${data.current.uv}`;
    });
}

fetchWeather('Cape Town', 'cpt');
fetchWeather('Johannesburg', 'jhb');
fetchWeather('Durban', 'dbn');