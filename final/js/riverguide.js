

fetch("json/guide.json")
    .then((response)=>response.json())
    .then((river)=>{
        for (let i = 0; i < 3; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let img = document.createElement('img');
            
            

            h2.textContent = river.riverguides[i].name;
            h3.textContent = "Rafting Level: " + river.riverguides[i].level;
            p2.textContent = "Years of Experience: " + river.riverguides[i].yearsOfExp;
            p3.textContent = "Email: " + river.riverguides[i].email;
            p.textContent = "Biography: " + river.riverguides[i].biography;

            img.setAttribute('src', "images/" + river.riverguides[i].photo);
            img.setAttribute('alt', "Photo of " + river.riverguides[i].name);
            
            


            card.appendChild(h2);
            card.appendChild(img);
            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(p3);
            
            

            document.querySelector('div.cards').appendChild(card);

            }

        }
    );