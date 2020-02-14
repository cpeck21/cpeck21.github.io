
const tempNumber = parseFloat(document.getElementById("temp").textContent);
const speedNumber = parseFloat(document.getElementById("speed").textContent);

if (tempNumber <= 50 && speedNumber > 3) {
wc=Math.round(35.74 + (.6215 * tempNumber)-(35.75*Math.pow(speedNumber,.16))+(.4275*tempNumber*Math.pow(speedNumber,.16)));
document.getElementById("chill").textContent = wc;
} 
else{
    document.getElementById("chill").textContent = "N/A";
}
