var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	// from answers at https://stackoverflow.com/q/5623838/21283565
	var rgbToHex = (r, g, b) => '#' + [r, g, b]
  		.map(x => x.toString(16).padStart(2, '0')).join('')
	return rgbToHex(red, green, blue);
}

function setRandomGradient() {
	console.log("In Set random gradient");
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);

setGradient();