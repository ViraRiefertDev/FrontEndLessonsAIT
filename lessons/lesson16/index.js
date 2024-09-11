//Создаём пустой объект
let emptyUser = {};
console.log(emptyUser);

//Создаём заполеннный объект
const person = {
  name: "Bob",
  age: 23,
  isAdmin: true,
};
console.log(person);

//Создание свойства (Обращение к свойству для его получения, создания, изменения или удаления происходит через точку)
emptyUser.userName = "Tom";
console.log(emptyUser);

//Получение значения свойства объекта
console.log(person.name);
let personAge = person.age;
console.log(personAge);

//Изменение значения свойств объекта
person.isAdmin = false;
console.log(person);

//Удаление свойства из объекта (использование оператора delete)
delete person.age;
console.log(person);

//Брекет синтаксис
// позволяет задавать более сложные имена для ключей
const user = {
  ["likes bird"]: true,
};

console.log(user["likes bird"]);

user["user.age"] = 24;
console.log(user);

//позволяет подставлять переменные
let key = "isAdmin";
console.log(person[key]);

//оператор in позволяет проверить, есть ли свойство в объекте
const animalData = {
  animalName: "Mongey",
  age: 4,
  city: "Berlin",
};

let checkValue = " city";
if (checkValue in animalData) {
  console.log(animalData[checkValue]);
} else {
  console.log("Животное не определено в зоопарке");
}

//перебор ключей объекта - for in
for (let key in animalData) {
  console.log(key);
  //так можно достучаться до значения в ключе
  console.log(animalData[key]);
}

//сложная структура объекта
const bookStore = {
  shopName: "Books",
  books: [
    { price: 200, name: "Book1" },
    { price: 300, name: "Book2" },
  ],
  //2 Варианта как создать функцию
 /*  sayHi: () => {
   console.log('Book2');
  } */
 sayHi(){
   console.log('Books');
 }
};

console.log(bookStore);
console.log(bookStore.books[1].price);
bookStore.sayHi();
