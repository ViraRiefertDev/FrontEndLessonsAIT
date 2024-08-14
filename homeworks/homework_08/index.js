//Задание 1. Явное преобразование типов
/*
Преобразуйте следующие значения к строке или числу или логическому 
значению и выведите в консоль результат, пример:
console.log('-17.17 to string is ' + String(-17.17));)
*/
/* to string */
console.log('17 to string is ' + String(17));                 // '17'
console.log('-17.17 to string is ' + String(-17.17));         // '-17.17'
console.log('false to string is ' + String(false));           // 'false'
console.log('null to string is ' + String(null));             // 'null'
console.log('undefined to string is ' + String(undefined));   // 'undefined'
console.log('0 to string is ' + String(0));                   // '0'

/* to number */
console.log("'17' to number is "+ Number('17'));              // 17
console.log('true to number is ' + Number(true));             // 1
console.log('false to number is ' + Number(false));           // 0
console.log('null to number is ' + Number(null));             // 0
console.log('undefined to number is ' + Number(undefined));   // NaN
console.log("'   20   ' to number is " + Number('   20   ')); // 20
console.log("'      ' to number is " + Number('      '));     // 0
console.log("'   30d   ' to number is " + Number('   30d   '));// NaN

/* to boolean */
console.log('null to boolean is ' + Boolean(null));            // false
console.log('undefined to boolean is ' + Boolean(undefined));  //false
console.log('0 to boolean is ' + Boolean(0));                  //false
console.log('-0 to boolean is ' + Boolean(-0));                //false
console.log('NaN to boolean is ' + Boolean(NaN));              //false
console.log("'' to boolean is " + Boolean(''));                //false
console.log("' ' to boolean is " + Boolean(' '));              //true
console.log('17 to boolean is ' + Boolean(17));                //true
console.log("'Hello' to boolean is " + Boolean('Hello'));      //true

console.log('--------------------------------------------');

//Задание 2. Операторы сравнения
/*
   Выведите в консоль результаты этих выражений. Изучите результаты.    
*/

const a = 17;
const b = 5;

console.log(a > b);        //true
console.log(a <= b);       //false
console.log(a == b);       //false
console.log(a != b);       //true

console.log('a' < 'b');    //true
console.log('ab' > 'a');   //true


console.log('--------------------------------------------');

console.log('17' > 1);     //true
console.log(17 === 1);     //false
console.log(17 === 17);    //true
console.log(17 === '17');  //false
console.log(17 === true);  //false
console.log('0' === '');   //false

console.log('--------------------------------------------');

console.log(true === false);     //false
console.log(true === true);      //true
console.log(null === undefined); //false
console.log(false === 0);        //false



console.log(17 == '17');         //true
console.log('0' == '');          //false
console.log(0 == '');            //true
console.log(null == undefined);  //true
console.log(false == 0);         //true

console.log('--------------------------------------------');

console.log(undefined == null);  //true
console.log(undefined == 0);     //false
console.log(null == 0);          //false
console.log(undefined < 0);      //false
console.log(undefined > 0);      //false

//Прикол!
console.log(null>=0);            //true

