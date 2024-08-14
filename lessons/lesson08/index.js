//вывод в консоль
console.log("Hello JS");

//Создание переменных
let dog = "Sharik";
dog = "Tuzik";
console.log(dog);
const cat = "Barsik";

//Примитивные типы данных
//1 string
let str1 = "Можно указывать в двойных кавычках";
let str2 = 'Можно в одинарных кавычках';
let str3 = "13";
let str4 = str1 + " " + str2;
console.log(str4);

//2 number
let num = 13;

//3 Bigint
// bigint — низкий поклон в сторону крипро- валют, токенов, контрактов.
// Они оперируют большими числами, и там этот тип данных очень пригождается.
// Скорее всего, не пригодится в вашем обычном фронтенде.
let num3 = 1239n;

//4 Boolean
let isDrunk = true;

//условные конструкции
if (isDrunk) {
   console.log("Ты пьян");
}
else {
   console.log("Ты не пьян");
}

const result = isDrunk ? "Ты пьян!" : "Ты не пьян!";
console.log(result);

//undefined
let str5;

//null- отсутствие значения
let empty = null;

//7 symbol
let s1 = Symbol("что-то");

//преобразование типов данных
//1 преобразование в строку

//неявное преобразование
let str7 = '' + 9;
console.log(str7);
//посмотреть какой тип данных у преременной
console.log(typeof str7);

//явное преобразование
const num4 = 10;
let str8 = String(num4);


//пример
const res = 9 + 12 + "5";//"215"
console.log(typeof res);
const res2 = "5" + 9 + 12;

//Преобразование в число неявное 
//+ это преобразование в число
const num5 = +"6";
const res3 = +"9" + +"10";
console.log(res3);

//Явное преобразование в число
const num6 = Number("117");
const num7 = Number("129*#");//NaN (not a number)
console.log(num7);
console.log(typeof num7);

//Преобразование в булевое значение
//число в булевое

const res4 = Boolean(9);//True
const res5 = Boolean(0);//False
const res6 = Boolean(-1);//True

//строка в булевое
const res7 = Boolean("");//False
const res8 = Boolean(" ");//True
console.log(res8);

//Равенство строгое и нестогое
//=== строгое равенство
//== нестрогое равенство
//= присваивание

console.log(9 === "9"); //false
console.log(9 == "9"); //true -- число преобразуетс в стринг

let age = 18;
if (age < 18) {
   console.log("Вы еще не совершеннолетний")
} else if (age >= 18 && age < 65) {
   console.log("Вы взрослый человек");
} else {
   console.log("Вы пенсионер");
}

let day = 3;
let dayName;
switch (day) {
   case 1:
      dayName = "Понедельник";
      break;
   case 2:
      dayName = "Вторник";
      break;
   case 3:
      dayName = "Среда";
      break;
   default:
      dayName = "Выходные";
      break;
}

console.log(dayName);

//использование шаблонных сток
const firstName = "Вера";
const lastName = "Риферт";
const age1 = 33;
const state = "Кёльн";

const greeting = `Привет, меня зовут ${firstName} ${lastName}. Мне ${age} лет, я из живу в городе ${state}.`;
console.log(greeting);

//Массив - динамический массив
//Длина не фиксирована

//Два способа создания массива
const arr1 = []; //1 способ
const arr2 = new Array(); //2 cпособ

// Методы работы с массивами

const students = [];
students.push("John"); // добавили элемент справа
console.log(students);
students.push("Tom"); // добавили элемент справа
console.log(students);
students.unshift("Alex"); // добавили слева
console.log(students);
// pop - удалил элемент с конца массива
const vik = students.pop();
console.log(students);
console.log(vik);
// shift - удаляет элемент слева массива(начало)

students.shift();
console.log(students);













