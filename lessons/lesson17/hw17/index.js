//Предположительно данные сервера (тестовые данные)
const spaceship = {
   name: 'Star',
   manufacturer: 'SpaceX',
   crew: 50,
   maxSpeed: '10km/s',
};

//Выбираем элементы на странице
let spaceshipNname = document.querySelector('#spaceship-name')
let spaceshipManufacturer = document.querySelector('#spaceship-manufacturer')
let spaceshipCrew = document.querySelector('#spaceship-crew')
let spaceshipMaxSpeed = document.querySelector('#spaceship-max-speed')
let hideManufacturerButton = document.querySelector('#hide-manufacturer-button')

//Заполняем элементы на странице данными
spaceshipNname.textContent = `Name: ${spaceship.name}`;
spaceshipManufacturer.textContent = `Manufacturer: ${spaceship.manufacturer}`;
spaceshipCrew.textContent = `Crew: ${spaceship.manufacturer}`;
spaceshipMaxSpeed.textContent = `Max Speed: ${spaceship.maxSpeed}`;

//Создаём функцию для скрытия элемента manufacturer
const hideManufacturer = () => {
   spaceshipManufacturer.classList.add('hidden');
}

//Привязка функции к кнопке
hideManufacturerButton.addEventListener('click', hideManufacturer);