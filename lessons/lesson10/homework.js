//Задание 1.
//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100. Найти максимальное и минимальное значение в массиве. Вывести в консоль.
let randomArr = [];
for(let i = 0; i<10; i++){
   randomArr.push(Math.round(Math.random()*100));
}
 let maxValue = Math.max(...randomArr); //... разделяем массив на отдельные составляющие
 //Соединение двух массивов
 //[...randomArr, ...arr] - для соединения двух массивов их необходимо обернуть в []
 let minValue = Math.min(...randomArr);
console.log(randomArr);
console.log(maxValue);
console.log(minValue);

//Задание 2.
//Объвить массив из 10 любых элементов, заполнить. Вырезать первый элемент и добавить его в конец массива.

let randomArr2 = [];
for(let i = 0; i<10; i++){
   randomArr2.push(Math.round(Math.random()*100));
}
//shift, unshift, push, pop

console.log(randomArr2);
/* console.log(randomArr2.unshift('q'));
unshift - добавляет элемент в начало массива, и возвращает новую длину массива 
*/
let firstEl = randomArr2.shift();
randomArr2.push(firstEl);
console.log(randomArr2);

//Задание 3.
//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75. Найти минимальное и максимальное значение в массиве. Вывести в консоль их сумму.

let randomArr3 = [];
for(let i = 0; i<10; i++){
   randomArr3.push(Math.round(Math.random()*75));
}
console.log(randomArr3);
let max2 = Math.max(...randomArr3);
let min2 = Math.min(...randomArr3);
console.log(max2 + min2);

//Задание 4.
//Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50. Найти сумму всех элементов массива. Вывести в консоль.
let randomArr4 = [];
for(let i = 0; i<10; i++){
   randomArr4.push(Math.round(Math.random()*50));
}
let sum = 0;
for(let i = 0; i<10; i++){
   sum += randomArr4[i];
}

//Задание 5 (необязательное).
//Объявить массив из 5 элементов и заполнить его любыми числами. Присвоить 5 переменным значения из массива с помощью деструктуризации.

//Задание 6.
//Разбить строку

//Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.
//Copy
//на слова и вывести в консоль по одному слову в строке.
let exampleStr = 'Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.';
let words = exampleStr.split(' ');
console.log(words);
for(let i = 0; i <words.length; i++){
   console.log(words[i]);
}
for(let word of words){
   console.log(word);
}