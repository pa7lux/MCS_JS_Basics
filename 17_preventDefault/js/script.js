const form = document.querySelector('form');

form.onsubmit = function(e) {
	e.preventDefault();
	console.log('Submitted');
}