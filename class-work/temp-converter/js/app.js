document.querySelector('#celcius').onkeyup = function() {
 	var tempC = parseInt(this.value);
 	if (isNaN(tempC)) {
 		document.querySelector('#fahrenheit').value = '';
 	} else {
 	 	document.querySelector('#fahrenheit').value = (tempC * (9/5)) + 32;
 	}
}
document.querySelector('#fahrenheit').onkeyup = function() {
 	var tempF = parseInt(this.value);
 	if (isNaN(tempF)) {
 		document.querySelector('#celcius').value = '';
 	} else {
 	 	document.querySelector('#celcius').value = (tempF - 32) * (9/5);
 	}
}
