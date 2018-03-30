console.log('You are at '+window.location);

function sayHi() {
	return 'Привет, студент';
}

document.body.innerHTML = sayHi();

function sayName(name) {
	return 'Привет '+ name;
}

console.log(sayName('Саша'));
console.log(sayName('Вася'));
