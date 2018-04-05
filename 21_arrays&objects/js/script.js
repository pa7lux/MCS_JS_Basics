console.log('You are at '+window.location);

//const cools = document.getElementsByClassName('cool');
//const cools = document.getElementsByTagName('div');
const cools = document.querySelectorAll('.cool');
console.log(cools);

cools[0].innerHTML = "I am first";