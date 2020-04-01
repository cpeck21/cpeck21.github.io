fetch("//api.openweathermap.org/data/2.5/weather?id=5596467&units=imperial&APPID=78605b9cef040f5f304838f9fb2cc00e")
    .then((response) => response.json())
    .then((data) => {

        document.getElementById('temp').textContent = "Current temp: " + data.main.temp + "\xB0";
        document.getElementById('humid').textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById('speed').textContent = "Wind Speed: " + data.wind.speed + "mph";
        document.getElementById('current').textContent = "Currently:  " + data.weather[0].main;
        

        const tempNumber = data.main.temp;
        const speedNumber = data.wind.speed;
        let wc = 0;

        if (tempNumber <= 50 && speedNumber > 3) {
            wc = Math.round(35.74 + (.6215 * tempNumber)-(35.75*Math.pow(speedNumber,.16))+(.4275*tempNumber*Math.pow(speedNumber,.16)));
            document.getElementById('chill').textContent = "Wind Chill: " + wc + "\xB0";
            } 
            else{
                document.getElementById("chill").textContent = "Wind Chill: N/A";
            }

            

    });
    