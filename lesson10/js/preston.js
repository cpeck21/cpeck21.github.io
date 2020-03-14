const apiURL1 = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=78605b9cef040f5f304838f9fb2cc00e";


fetch(apiURL1)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('temp').textContent = "Current temp: " + data.main.temp + "\xB0";
        document.getElementById('humid').textContent = "Humidity: " + data.main.humidity + "%";
        document.getElementById('speed').textContent = "Wind Speed: " + data.wind.speed + "mph";
        document.getElementById('current').textContent = "Currently " + data.weather[0].main;
        

        const tempNumber = data.main.temp;
        const speedNumber = data.wind.speed;
        let wc = 0;

        if (tempNumber <= 50 && speedNumber > 3) {
            wc = Math.round(35.74 + (.6215 * tempNumber)-(35.75*Math.pow(speedNumber,.16))+(.4275*tempNumber*Math.pow(speedNumber,.16)));
            document.getElementById("chill").textContent = wc;
            } 
            else{
                document.getElementById("chill").textContent = "N/A";
            }

            document.getElementById('chill').textContent = "Wind Chill: " + wc + "\xB0";

    });








const d = new Date();

const todayDayNumber = d.getDay();

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=78605b9cef040f5f304838f9fb2cc00e";

 fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
    let mylist = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(mylist);

        let forecastDayNumber = todayDayNumber;
        for (i=0; i<mylist.length; i++) {
                forecastDayNumber += 1;
                if (forecastDayNumber === 7){forecastDayNumber=0;}

                let theDayName = document.createElement("h3");
                theDayName.textContent = weekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.textContent = jsObject.list[i].main.temp + "\xB0";

                let iconcode = jsObject.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src=iconPath;

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('forecast').appendChild(theDay);
            
        }
    });

