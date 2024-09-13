//Получить массив ключей/значений объекта color
const color = {
   name: "white",
   code: "fffff",
   prices: {
      price: true,
      sale: true,
   },
};

const colorKeysArray = Object.keys(color);
console.log(colorKeysArray);

const colorValuesArray = Object.values(color);
console.log(colorValuesArray);

//такой способ подходит если вложенный объект, если строка возвращает [ '0', '1', '2', '3', '4' ]
const colorKey = Object.keys(color.code);
console.log(colorKey);

//Вернет [ 'price', 'sale' ]
const colorKeys = Object.keys(color.prices);
console.log(colorKeys);

//пример копирования с примитивными типами данных
const userName = "Tom";
console.log(userName);

let adminName = userName;
console.log(adminName);

adminName = "Bob";
console.log(userName, adminName);

//Ссылочный тип данных (в переменной хранится ссылка на объект массив или функцию)
const customerData = {
   customerName: "Mary",
   company: "Apple",
};

customerData.company = "Facebook";
console.log(customerData);

const userData = customerData;
console.log(customerData);

userData.customerName = "John";
console.log(customerData);

//деструктуризация
const bookObj = {
   bookName: "Great Gatsby",
   price: 20,
   author: "Fitzgerald",
};

const newBookObj = { ...bookObj };
console.log(newBookObj);

newBookObj.price = 30;
console.log(newBookObj);
console.log(bookObj);

//передачу аргументов в функцию, с помощью деструктуризации (оператор расширения)
const numbersOperation = (a, b, c, d) => {
   return a - b + c / d;
};

const numbers = [3, -9, 23, 1];

console.log(numbersOperation(...numbers));

//деструктурирующее присваивание
const fruitObj = {
   nameFruit: "Apple",
   price: 30,
};

// let name = fruitObj.nameFruit;
// let fruitPrice = fruitObj.price;
// console.log(name, fruitPrice);
//price: fruitPrice из объекта возьмется значение свойсва price и сохранится в переменную пседоним fruitPrice
let { nameFruit, price: fruitPrice, shop: fruitShop = "Shop name" } = fruitObj;
console.log(fruitPrice);
console.log(fruitShop);

//деструктурирующее присваивание массива
// const [a, b] = arr

//Методы массива
//Map (не мутирующий метод) - создаёт новый массив с результами вызова предоставленной функции
//для каждого элемента в массиве map(element, index,array)
const numbersArray = [1, 2, 3, 4, 5];
//сокращенный вид
const squaredNumbers = numbersArray.map((num) => num ** 2);
console.log(squaredNumbers);

/* -------------------- */
const words = ["red", "grape", "note", "black"];
const newWords = words.map((word, index, arr) => {
   console.log(`${index + 1} - ${word} in array ${arr}`);

   return word.length;
});

console.log(newWords);
console.log(words);

/* ---------------- */
const wordsObjAr = words.map((word, i) => {
   return {
      index: i,
      position: i + 1,
      word: word,
      length: word.length,
   };
});

console.log(wordsObjAr);

//Начинается работа с HTML
//forEach
//ничего не возвращает (не возвращает новый массив)
//а в остальном работает как map
const list = document.querySelector(".list");

const cars = ["BMW", "Tesla", "Aston Martin", "Toyota"];

cars.forEach((carName) => {
   liElement = document.createElement("li");
   liElement.textContent = carName;
   list.append(liElement);
});

//filter() создает новый массив, если итерация возвращает true, то этот элемент
//сохраняется в новом возвращаемом массиве
const products = [
   { productName: "Milk", price: 100 },
   { productName: "Bread", price: 120 },
   { productName: "Grape", price: 150 },
];
const filteredProducts = products.filter(product => product.price > 110);
console.log(filteredProducts);

//Метод reverse (мутирующий)) - меняет массив на обратный порядок
const productsNames = ['Milk', 'Sugar', 'Bread'];
productsNames.reverse();
console.log(productsNames);

//Метод join немутирующий - превращает массив в строку, соединяет все элементы
//в () указываем разделитель
const str = productsNames.join(':');
console.log(str);
console.log(productsNames);

//includes немутирующий - проверяет есть ли переданный элемент в массиве 
//возвращает true/false
const isElement = productsNames.includes('Bread');
console.log(isElement);


