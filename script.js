// 1. make my first API call and is it bring back a result.

var searchBtn = $("#search-btn");
var inputElement = $(".form-control")
var apiKey = "6f019b2e75c9e60a83540d4bf5018b75"

function getCityData() {
    var cityName = inputElement[0].value
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
                    console.log(data);
                    var temp = data.list[0].main.temp
                    var mainTempEl = document.getElementById('main-current-temp')
                    mainTempEl.textContent = temp;
                })

        })
}

searchBtn.click(getCityData);





// 2. use local storage to save searched cities in a form of a button.

// 3. 