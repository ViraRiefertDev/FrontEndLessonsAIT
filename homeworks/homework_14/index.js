//Выбор необходимых элементов
let mainForm = document.querySelector('#main-form');
let userHeight = document.querySelector('#userHeight_');
let userGender = document.querySelector('#userGender_');
let sendButton = document.querySelector('.send-button');


//Получение данных из формы
let getData = () => {
   let userHeightValue = mainForm.userHeight.value;
   console.log(userHeightValue);
   let userGenderValue = mainForm.userGender.value;
   console.log(userGenderValue);
}

sendButton.addEventListener('click', getData);
