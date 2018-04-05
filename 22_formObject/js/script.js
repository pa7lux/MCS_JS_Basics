const form = document.forms[0];
const insert = document.querySelector('.total');

form.onsubmit = function(e) {
	e.preventDefault();
	insert.innerHTML = form.elements.quantility.value * form.elements.price.value;
}