//--- Обработчик событий для кнопок

//Выбор необходимых элементов
let infoCard = document.querySelector('.info-card');
let addButton = document.querySelector('.add-button');
let hideButton = document.querySelector('.hide-button');

//Написание логики для кнопок
let addCardFunction = () => {
   //console.log("Add");

   //Изменение видимости карточки

   //1 вариант -style
   //infoCard.style.display = "flex";
   //infoCard.style.opacity = '1';

   //2 вариант - удаление класса через removeAttribute
   //infoCard.removeAttribute('class');

   //3 вариант - добавление доп класса
   infoCard.classList.remove('hide');

};

let hideCardFunction = () => {
   //console.log('Hide');

   //Изменение видимости карточки

   //1 вариант -style
   //infoCard.style.display = 'none';
   //infoCard.style.opacity = '0';

   //2 вариант - добавление класса через setAttribute
   //infoCard.setAttribute('class', 'hide');

   //3 вариант - добавление доп класса
   infoCard.classList.add('hide');
   
};

//Привязка функции к событию (обработчиков к кнопке)
addButton.addEventListener('click', addCardFunction);
hideButton.addEventListener('click', hideCardFunction);

//---Обработчик события для поля
let searchField = document.querySelector('#search-input');

let changeInput = (event)=>{
   console.log(event.target.value);
};

searchField.addEventListener('change',changeInput);



/* searchField.addEventListener('change', (event)=>{
   console.log(event.target.value);
}); */

//---Изменение поведения по умолчанию
let link = document.querySelector('#link');
let showAlert = (event)=>{
   event.preventDefault();
   alert('Отмена перехода');
};

link.addEventListener('click', showAlert);

//---Получения данных из форм

// Вариант 1 - click
let sendButton = document.querySelector(".send-button");
let mainForm = document.querySelector("#main-form");
let resultBlock = document.querySelector(".result");

let getData = () => {
  // Способ 1 - с помощью формы и атрибута name
  let userNameValue = mainForm.userName.value;
  console.log(userNameValue);

  //Способ 2 - свойство value для элемента
  let userSurnameValue = document.querySelector('#surname').value;
  console.log(userSurnameValue);

  //Cпособ 3 . свойство elements у формы
  let userAgeValue = mainForm.elements['age'].value;
  console.log(userAgeValue);

  resultBlock.textContent = `User data - ${userNameValue}, ${userSurnameValue}, ${userAgeValue}`;
};

sendButton.addEventListener("click", getData);





