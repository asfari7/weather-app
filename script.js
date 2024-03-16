$(document).ready(function () {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=930a0a6490f2ad5356882930bb47cece",
    type: "GET",
    success: function (response) {
      displayIcon(response);
      $("#weather").text(response.weather[0].main);
      $("#city").text(response.name);
      $("#humidity").text(response.main.humidity + "%");
      $("#wind").text(response.wind.speed + " km/j");
    },
    error: function (error) {
      alert("Kota tidak ditemukan");
    },
  });

  $("#search-btn").click(function () {
    const city = $("#search-bar").val();
    if (city.trim() === "") {
      alert("Masukkan nama kota!");
    }
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=930a0a6490f2ad5356882930bb47cece",
      type: "GET",
      success: function (response) {
        displayIcon(response);
        $("#weather").text(response.weather[0].main);
        $("#city").text(response.name);
        $("#humidity").text(response.main.humidity + "%");
        $("#wind").text(response.wind.speed + " km/j");
      },
      error: function (error) {
        alert("Kota tidak ditemukan");
      },
    });
  });
});

function displayIcon(response) {
  if (response.weather[0].main == "Clear") {
    $("#weather-icon").attr("src", "./images/clear.png").hide().slideDown();
  } else if (response.weather[0].main == "Clouds") {
    $("#weather-icon").attr("src", "./images/clouds.png").hide().slideDown();
  } else if (response.weather[0].main == "Rain") {
    $("#weather-icon").attr("src", "./images/rain.png").hide().slideDown();
  } else if (response.weather[0].main == "Mist") {
    $("#weather-icon").attr("src", "./images/mist.png").hide().slideDown();
  } else if (response.weather[0].main == "Snow") {
    $("#weather-icon").attr("src", "./images/snow.png").hide().slideDown();
  } else if (response.weather[0].main == "Drizzle") {
    $("#weather-icon").attr("src", "./images/drizzle.png").hide().slideDown();
  } else {
    $("#weather-icon").attr("alt", "icon weather").hide().slideDown();
  }
}
