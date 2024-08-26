/* Задача 1
У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого 
значения в массиве (массив нужно передать аргументом) и вывода результата в 
консоль. Вызовите функцию для демонстрации результата */


console.log("--------Задача 1----------");
function printDoubleElements(inputArray){
   const result=[];
   for(number of inputArray){
      result.push(number * 2);
   }
   console.log(result);
}
const numbersArray = [2,4,6,8,10];
printDoubleElements(numbersArray);


/* Задача 2
Напишите функцию, которая принимает строку и число n, а затем возвращает первые n 
символов строки. Для отображения результа работы функции, вызовите её три раза с 
различными параметрами, результат каждого вызова присвойте отдельной переменной и 
выведите переменные в консоль */

console.log("--------Задача 2----------");

function getFirstNChars(string,n){
   return string.substring(0,n);
}
const string = "abracadabra";
const string1 = getFirstNChars(string, 2);
const string2 = getFirstNChars(string, 5);
const string3 = getFirstNChars(string, 8);

console.log(string1);
console.log(string2);
console.log(string3);

/* Задача 3*
У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления 
среднего значения элементов массива (массив нужно передать аргументом) и вывода 
результата в консоль. Вызовите функцию для демонстрации результата. */

console.log("--------Задача 3----------");

function printAverage(inputArray){
   let summ = 0;
   for(number of inputArray){
      summ += number;
   }
   const avarage = summ/inputArray.length;
   console.log(avarage);
}

const numberArray = [10, 15, 20, 25, 30];
printAverage(numberArray);


