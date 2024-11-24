// Retrieve temperature and wind speed data from a weather API or another data source
let temp = 0; // Replace with the actual temperature in °C
let wind = 20; // Replace with the actual wind speed in km/h

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C";
};

document.querySelector("#wind-chill").textContent = (temp <= 10 && wind >= 4.8) ? calculateWindChill(temp, wind) : "N/A";