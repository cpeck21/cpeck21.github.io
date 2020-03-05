const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p = document.createElement('p4');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p3');
            let image = document.createElement('image');
            
            

            h2.textContent = towns[i].name;
            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt', "Photo of " + towns[i].name);
            h3.textContent = towns[i].motto;
            p2.textContent = "Year Founded: " + towns[i].yearFounded;
            p3.textContent = "Population: " + towns[i].currentPopulation;
            p.textContent = "Average Rainfall: " + towns[i].averageRainfall + "\"";
            
            


            card.appendChild(h2);
            card.appendChild(image);
            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(p3);
            

            document.querySelector('div.cards').appendChild(card);



        }
    });