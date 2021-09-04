const apiKey = `7f76679c57eb570b5c8a4557b8af23ed`;
const cityTemperature = () => {
    const cityName = document.getElementById("city-name");
    const city = cityName.value;
    cityName.value = "";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayTemperature(data));
};
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
    setInnerText("city", temperature.name);
    setInnerText("temp", temperature.main.temp);
    setInnerText("condition", temperature.weather[0].main);
    console.log(temperature);

    // set temperature icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.setAttribute("src", url);
};
