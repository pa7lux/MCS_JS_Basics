console.log('You are at '+window.location);

let myText = (element, text) => {
	element.innerHTML = text;
}

myText(document.body, 'привет');