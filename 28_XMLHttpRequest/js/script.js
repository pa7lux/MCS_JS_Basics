const APIKey = '099715979800997fed902c8c415868c1';
const city = 'Москва';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

xhr.send();

if(xhr.status != 200) {
	console.log(xhr.status + ' '+ xhr.statusText);
} else {
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	document.write(DATA.main.temp - 273);
}
