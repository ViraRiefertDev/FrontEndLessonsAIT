//Задача 1
//Создайте массив строк и выведите в консоль его длину, первый и последний элементы массива
const stringsArray = ["apple", "banana", "cherry", "kiwi", "blueberry"];
console.log(stringsArray.length)
console.log(stringsArray[0]); //Выводим первый элемент массива
console.log(stringsArray[stringsArray.length-1]); //Выводим последний элемент массива

//Задача 2
//Создайте новый массив на основе массива [1, 2, 3, 4, 5, 6], в который будут входить только четные числа из заданного массива
const numbersArray = [1,2,3,4,5,6,86,157];
const evenNumbersArray = [];
for(number of numbersArray){
   if(number%2==0){
      evenNumbersArray.push(number);
   }
}
console.log(evenNumbersArray);

//Задача 3*
//Найдите максимально и минимальное значения из массива [3, 7, 2, 9, 4] и 
//вывидите их в консоль. ! Не используя математические методы max и min, 
//только циклы

const newArray = [3,7,2,9,4];
let max = newArray[0];
let min = newArray[0];
for(number of newArray){
   if(number > max){
      max = number;
   }
   if(number < min){
      min = number;
   }
}

console.log(`Максимальное значение: ${max}`);
console.log(`Минимальное значение: ${min}`);