//выбор элементов
let buttonResult = document.querySelector(".button-result");
let resultContainer = document.querySelector(".flex-card-container-mod");
let form = document.querySelector("#id-form");

let resultName = document.querySelector('#result-user-name');
let resultSurname = document.querySelector('#result-user-surname');
let resultAge = document.querySelector('#result-user-age');
let resultJob = document.querySelector('#result-user-job');

//функция для показа карточки
let showResultCard = (event)=>{
   event.preventDefault();
   //Считываем все введенные данные с помощью формы и атрибута name
   let userNameValue = form.userName.value.trim();
   let userSurnameValue = form.userSurname.value.trim();
   let userAgeValue = Number(form.age.value);
   let employeePositionValue = form.jobPosition.value.trim();
   

   if(userNameValue !== "" && userSurnameValue !== "" && userAgeValue >= 18 && userAgeValue <= 60 && employeePositionValue !== ""){
   //Позитивный кейс, все данные введены
   resultName.textContent = userNameValue;
   resultSurname.textContent = userSurnameValue;
   resultAge.textContent = userAgeValue;
   resultJob.textContent = employeePositionValue;
   resultContainer.classList.remove('hide-card-container');
   }else{
      resultContainer.classList.add('hide-card-container');
      
      
         let message = "Введите следующие данные:\n";
         if (userNameValue === "") {
            message += 'Имя\n';
         }
         if (userSurnameValue === "") {
            message += 'Фамилия\n';
         }
         if (userAgeValue < 18 || userAgeValue>60) {
            message += 'Возраст (18-60)\n';
         }
         if (employeePositionValue === "") {
            message += 'Должность сотрудника';
         }
         // Используем setTimeout для задержки перед показом alert
         setTimeout(() => {alert(message);}, 100); // Задержка в 100 миллисекунд позволяет браузеру обновить DOM
   }
}

//привязка событий submit в форме
form.addEventListener("submit", showResultCard);