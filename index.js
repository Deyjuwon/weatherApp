const apiKey = "edac841430dba97d97f428865e4b576d"
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button")

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&APPID=${apiKey}`);
            console.log(response.status)
            if (response.status === 404 || response.status === 400) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else if(response.status === 200) {
                document.querySelector(".error").style.display = "none";
            }
            
            var data = await response.json()

            console.log(data)
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

            var weatherCondition = data.weather[0].main

            // document.querySelector(".weather-icon").src = "images/" + weatherCondition + ".png"

            if (weatherCondition === "Clouds") {
                document.querySelector(".weather-icon").src = "images/clouds.png"
            } else if (weatherCondition === "Haze") {
                document.querySelector(".weather-icon").src = "images/haze.png"
            } else if (weatherCondition === "Clear") {
                document.querySelector(".weather-icon").src = "images/clear.png"
            } else if (weatherCondition === "Mist") {
                document.querySelector(".weather-icon").src = "images/mist.png"
            } else if(weatherCondition === "Rain") {
                document.querySelector(".weather-icon").src = "images/rain.png"
            } else if(weatherCondition === "Snow") {
                document.querySelector(".weather-icon").src = "images/snow.png"
            }
        
            document.querySelector(".weather").style.display = "block";
        
            
        }

        

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
            searchBox.value = "";
            // document.querySelector(".weather").style.display = "block";
            
        })