//-----------------Дистриктурирующее присваивание
let colorsConfig = ['dark', 'light', '32'];
//1. Вариант
//Сохранить значение из массива в переменную НЕ используя деструктуризацию
// let theme = colorsConfig[0];
// let secondTheme = colorsConfig[1];


// 2. Вариант с деструктуризацией
//[] потому что делаем деструктуризацию массива
//size = '20px' это значение по умолчанию, если пришло только 2 параметра в массиве
let [theme, secondTheme, size = '20px'] = colorsConfig;
console.log(theme, secondTheme, size);

//---------------- Встроенные методы для взаимодействия с пользователем
//Метод alert возвращает undefined
//let message = 'Hello, User';
//alert(message);

//Метод promt
//При нажатии на кнопку OK метод prompt вернёт значение из поля или пустую строку, если значение нет
//При нажатии на кнопку Cancel метод prompt вернет null, даже если в поле есть значение
//let resultPromt = prompt('Введите свой возраст', 100);
//console.log(resultPromt);

//Метод confirm
//let resultConfirm = confirm('Вы являетесь администратором?');
//console.log(resultConfirm);

//Параметры - это переменные, которые передаются в функцию
//Аргументы - это значения этих переменных


// --------Функции. Основы
let message ='Hello';

function showMessage(){
   // let message = 'Hello, User';
   console.log(message);
}
showMessage();
console.log(message);

//Функции с параметрами
//Параметры по умолчанию
function newShowMessage(name='Vera', age=20){
   let message = `Hello, ${name}. Age: ${age}`;
   console.log(message);
}
newShowMessage('Mary', 32);
newShowMessage('Tom', 30);
newShowMessage(undefined,34);

//Возврат значения
function getFullName(){
   let name = 'Bob';
   let surname = 'Smith';
   return `${name} ${surname}`;
}
let fullName = getFullName();
console.log(fullName)
