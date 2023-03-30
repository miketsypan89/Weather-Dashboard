// 1. make my first API call and is it bring back a result.

var searchBtn = $("#search-btn");
var inputElement = $(".form-control")
var apiKey = "6f019b2e75c9e60a83540d4bf5018b75"

function getCityData() {
    console.log(inputElement)
    var cityName = inputElement[0].value
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${apiKey}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {

                })
        })
}

searchBtn.click(getCityData);





// 2. use local storage to save searched cities in a form of a button.

// 3. 