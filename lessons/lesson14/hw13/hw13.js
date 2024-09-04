// Создайте HTML-документ с нумерованным списком '<ol>', содержащим первоначально 5 элементов '<li>'. Необходимо:

// 1. Добавить новые элементы в начало и в конец списка
// 2. Изменить текст второго элемента списка
// 3. Удалить третий элемент
// 4. Изменить стили по своему усмотрению для четвертого элемента

//Выбор элемента списка
let list = document.querySelector('.order-list');

//--Пункт 1
let newFirstElement =  document.createElement('li');
let newSecondElement = document.createElement('li');

newFirstElement.textContent = 'Element 1.0';
newSecondElement.textContent = 'Element 5.1';

list.prepend(newFirstElement);
list.append(newSecondElement);

//--Пункт 2

//Способы выбора вложенных элементов
//Способ 1 по ID или другой селектор по атрибуту калсса или id
let secondElementById = document.getElementById('second-element');
console.log(secondElementById);

//Способ 2 - свойство children
let secondElementByChildren = list.children[1];
console.log(secondElementByChildren);

//Способ 2 - по имени тега
//Может быть проблема если добавим вложенный список
let secondElementByTag = list.getElementsByTagName('li')[1];
console.log(secondElementByTag);

//Способ 4 - по селектору css
let secondElementByCssSelector = list.querySelector('li:nth-child(2)');
console.log(secondElementByCssSelector);

secondElementByChildren.textContent = "Element 2.0";

//-- Пункт 3
//Способ 1 - remove()
//метод быстрее, возвращает undefined
let thirdElement = list.children[2];
console.log(thirdElement);
console.log(thirdElement.remove());


//Способ 2 - removeChild()
/* // Разница метод возвращает удаленный элемент,  а remove() не возвращает элемент
let thirdElement = list.children[2];
console.log(list.removeChild(thirdElement)); */

//--Пункт 4
let fourthElement = list.getElementsByTagName('li')[3];
fourthElement.style.color = 'blue';

// селектор getElementsByTagName
console.log(list.getElementsByTagName('li'));








