console.log('You are at '+window.location);

const items = document.getElementsByTagName('li');
console.log(items);

let counter = 0;
while(counter < items.length) {
	items[counter].innerHTML = counter + 1;
	counter++;
}