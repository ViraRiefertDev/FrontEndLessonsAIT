//DOM (Document Object Model) - это представление HTML- документа в виде дерева тегов.

//------------Поиск элемента-------------
//document.getElementById(id)
//возвращает ссылку на элемент с заданным id. элемент должен иметь атрибут id
//let elem = document.getElementById('elem');

//document.getElementsByTagName(tag);
//метод ищет элементы с данным тегом и возвращает их коллекцию
//let divs = document.getElementsByTagName('div');

//document.getElementsByClassName(className);
//метод ищет элементы с данным именем класса
//let article = document.getElementsByClassName('article');

//document.getElementsByName(name);
//возвращает элементы с заданным атрибутом name
//let article = document.getElementsByName('up');

//document.querySelector(css selector);
//Вернет только первый элемент если их несколько
//document.querySelectorAll(css selector);
// Вернет массив из всех найденных элементов 
//let elements = document.querySelectorAll('ul>li');
//let elem = document.querySelector('.title');
//let elem = document.querySelector('#title');

//-----Выбор элементов  из DOM
//Селектор по id
let cardContainer = document.getElementById('card-container');
//console.log(cardContainer);

//По имени тега
let listElements = document.getElementsByTagName('li');
//console.log(listElements);

//По имени атрибтута class
let titles = document.getElementsByClassName('title');

//По имени атрибута name
let unList = document.getElementsByName('list');

//Селекторы querySelector и querySelectorAll - универсальные селекторы
let containers = document.querySelectorAll('div');
//console.log(containers);

let firstTitle = document.querySelector('title');
//console.log(firstTitle);


//-------Добавление элементов----
//Шаг 1- Создаем элемент
let newListItem = document.createElement('li');
//Шаг 2 - Заполнение контентом
newListItem.textContent = 'Surname: Smith';
//Шаг 3 - Выбираем элемент на странице, относительного которого добавим новый элемент
let list = document.querySelector('ul');
//Шаг 4 - Добавляем новый элемент на страницу
//list.before(newListItem);
//list.after(newListItem);
//list.prepend(newListItem);
//list.append(newListItem);

//------Изменение элементов
//с помощью textContent
let mainTitle = document.querySelector('.main-title');
console.log(mainTitle.textContent);
mainTitle.textContent = 'Main title';
console.log(mainTitle.textContent);

//с помощью innerHTML
let cardTitle = document.querySelector('h3');
console.log(cardTitle.innerHTML);
//вместо User Card добавляем целую строктуру
cardTitle.innerHTML = `
<a href = '#'>Profile link</a>
<span>-user</span>`

//Изменение стилей с помощью style
cardTitle.style.backgroundColor =  'bisque';

// Удаление элементов - метод remove
let lastElement = document.querySelector('#last-element');
lastElement.remove();






