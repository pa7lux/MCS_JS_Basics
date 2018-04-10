console.log('You are at '+window.location);

const buttons = document.querySelectorAll('button');

for(button of buttons) {
	button.style.backgroundColor = 'lightblue';
}

let person = {
	name: 'Sasha',
	surname: 'Patlukh',
	teacher: true
}

for(key in person) {
	console.log(person[key]);
}
