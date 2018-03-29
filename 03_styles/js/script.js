console.log('You are at '+window.location);

const Colored = document.querySelector('.colored');
console.log(Colored);

console.log(Colored.style);

let quest = prompt('Какой ты хочешь цвет?');
//Colored.style.backgroundColor = "blue";
Colored.style['background-color'] = quest;