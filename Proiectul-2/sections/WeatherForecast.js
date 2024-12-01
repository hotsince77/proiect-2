function displayWeatherForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);
  let weatherForecastContainer = document.querySelector(".weather-forecast");
  weatherForecastContainer.innerHTML = "";
  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { list } = data;
      list.forEach((element) => {
        const { dt, main, weather } = element;
        const day = getDayOfTheWeek(dt);
        const hour = getHour(dt);
        const temperature = Math.round(main.temp);
        const realFeel = Math.round(main.feels_like);
        const weatherDescription = weather[0].description;
        const weatherIcon = getWeatherIcon(weather[0].icon);
        weatherForecastContainer.innerHTML += `
          <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center">
            <div>
              <div><strong>${day}</strong></div>
              <div>${hour}</div>
            </div>
            <div><img src="${weatherIcon}" alt="" /></div>
            <div><strong>${temperature}°</strong></div>
            <div>${weatherDescription}</div>
            <div>Real feel: ${realFeel}</div>
          </div>
        `;
      });
    });
}
