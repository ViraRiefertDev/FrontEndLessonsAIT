//Function Declaration

function sum (a,b){
   return a+b;
}

// вызов
let result = sum(50, 30);
console.log(result);

 // Объявления функций поднимаются вверх контекста исполнения
 // (например, блока или функции).
 // Это означает, что вы можете вызвать функцию до
 // ее фактического объявления в коде.

greet();
function greet(){
   console.log("Hello world");
}



//Function Expression
const devide = function(a,b){
   return a/b;
}
console.log(devide(10,2));
//Function Expression не поднимается
//поэтому ее нужно объявить перед использованием


const subtract = function sub (a,b){
   return a-b;
}
// Основные различия:
// Хоистинг:
// Function Declaration поднимаются вверх, поэтому их можно вызывать до объявления.
// Function Expression не поднимается, поэтому ее нужно объявить перед использованием.
// Использование имен:
// Function Declaration всегда имеют имя.
// Function Expression могут быть анонимными или именованными. (bearbeitet) 
