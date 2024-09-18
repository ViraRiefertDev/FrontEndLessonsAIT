const name = document.querySelector('#name_');
const manufacturer = document.querySelector('#manufacturer_');
const crew = document.querySelector('#crew_');
const maxSpeed = document.querySelector('#maxSpeed_');
const buttonHideMF = document.querySelector('.button-starwars');
const manufacturerLine = document.querySelector('.manufacturer');


const resultCharact = [name, manufacturer, crew, maxSpeed];

const spaceship = {
   name: "Death Star",
   manufacturer: "Galactic Empire",
   crew: 342.953,
   maxSpeed: "1050 km/h",
}

let massivIndex = 0;
for(let charact in spaceship){
   resultCharact[massivIndex].textContent = spaceship[charact];
   massivIndex++;
}

const hideElement = () => {
   manufacturerLine.classList.toggle('hide-line');
   console.log('OK');
}


buttonHideMF.addEventListener('click', hideElement);
