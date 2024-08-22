
//Анонимная функция
const newFunc = (a, b, func) => {
   func(a, b);
};

newFunc(2, 3, (x, y) => x + y);

newFunc("Hello", "Tom", (greet, name) => {
   console.log(`${greet}, ${name}`);
});

//Массивы
let newArray1 = [];
let newArray2 = ['apple', 'grape'];

//Заполнение массива
newArray1[0] = 'red';
newArray1[2] = 'blue';
console.log(newArray1);
console.log(newArray1[1]);

newArray1[3] = [123, 455, 65];
console.log(newArray1);
console.log(newArray1[3][2]);

//Методы
//push - добавляет элемент в конец массива и возвращает новую длину массива
console.log(newArray1.push(1, "green"));
console.log(newArray1);

//pop - удаляет элементы из конца массива и возвращает удаленный элемент
let delete1 = newArray1.pop();
console.log(delete1);
console.log(newArray1);

//unshift - добавляет элемент в начало массива, возвращает длинну нового массива
let result = newArray1.unshift('black', null);
console.log(result);
console.log(newArray1);

//shift - удаляет элемент в конец массива, возвращает удаленный элемент
let delResult = newArray1.shift();
console.log(delResult);
console.log(newArray1);

//for of 
let numbers = [3, 5, 6,];
for( let number of numbers){
   console.log(number);
}

