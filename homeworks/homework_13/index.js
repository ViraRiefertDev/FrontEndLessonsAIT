//--------------------------------------
//1.Добавить новые элементы в начало и в конец списка

//--Создаем новые элементы
let element1 = document.createElement('li');
let element2 = document.createElement('li');

//--Заполняем элементы контентом
element1.textContent = 'Elephant';
element2.textContent = 'Giraffe';

//--Ищем элемент список ol
let animalList = document.querySelector('ol');
//--Добавляем 1 элемент в начало списка
animalList.prepend(element1);
animalList.append(element2);

//--------------------------------------
//2.Изменить текст второго элемента списка

//--Получаем второй элемент списка
let secondItem = animalList.getElementsByTagName('li')[1];
//--Изменяем текстовое содержимое второго элемента
secondItem.textContent = 'abracadabra';

//--------------------------------------
//3.Удалить третий элемент
let thirdElement = animalList.getElementsByTagName('li')[2];
thirdElement.remove();

//--------------------------------------
//4.Изменить стили по своему усмотрению для четвертого элемента

let fourthElement = animalList.getElementsByTagName('li')[3];
fourthElement.style.color = "blue";
fourthElement.style.fontSize = "24px";
fourthElement.style.textDecoration = "underline";



