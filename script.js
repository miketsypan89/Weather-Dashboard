// 1. make my first API call and is it bring back a result.

var searchBtn = $("#search-btn");
var inputElement = $(".form-control")
var apiKey = "6f019b2e75c9e60a83540d4bf5018b75"

function tempConverter(kelvin) {
    var fahrenheit = ((kelvin - 273.15) * 1.8) + 32
    return "Temp: " + Math.round(fahrenheit) + " °F"
}

function getCityData() {
    var cityName = inputElement[0].value
    addBtnSearchHistory(cityName)
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${apiKey}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var searchedCityName = data[0].name;
            var mainCityEl = document.getElementById('main-city-name');
            mainCityEl.textContent = searchedCityName;
            var lat = data[0].lat;
            var lon = data[0].lon;
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    var wind = (data.list[0].wind.speed)
                    var mainWindEl = document.getElementById('main-current-wind')
                    mainWindEl.textContent = "Wind: " + wind + " MPH";

                    var temp = tempConverter(data.list[0].main.temp)
                    var mainTempEl = document.getElementById('main-current-temp')
                    mainTempEl.textContent = temp;

                    var humidity = (data.list[0].main.humidity)
                    var mainHumidEl = document.getElementById('main-current-humidity')
                    mainHumidEl.textContent = "Humidity: " + humidity + "%";
                    console.log(data)

                    var localDateTime = (data.list[0].dt_txt)
                    var dateTimeEl = document.getElementById('currentDateTime')
                    dateTimeEl.textContent = localDateTime;
                })

        })
}

function addBtnSearchHistory(cityNameParameter) {
    // create a searched city button
    var searchedCityBtn = document.createElement("button")

    // change the text content to the searched city name parameter
    searchedCityBtn.textContent = cityNameParameter

    // add css styling
    searchedCityBtn.classList.add("btn")
    searchedCityBtn.classList.add("btn-secondary")

    // append search button to searched optons div container
    document.querySelector(".searched-options").appendChild(searchedCityBtn);


}

function saveToLocalStorage(cityNameParameter) {
    // add the result to the local storage


}

searchBtn.click(getCityData);





// 2. use local storage to save searched cities in a form of a button.

// 3. 