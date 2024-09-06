//Выбор элементов
let buttonResult = document.querySelector(".result-button");
let resultContainer = document.querySelector(".result");
let form = document.querySelector("#form");

//Создание функции для расчёта идеального веса
let calculateIdealWeight = (event) => {
  // console.log("Calculate");

   //отменяем поведение по умолчанию для формы (перезагрузка и отправка данных)
   event.preventDefault();

   //сохраняем значения роста и пола
   let height = form.height.value;
   let gender = form.gender.value;
   // console.log(typeof height);
   //преобразование значения из поля height в число
   let personHeight = Number(height);

   //расчёт значения идеального веса
   let idealWeight;
   if (gender === "female") {
      idealWeight = personHeight - (100 + (personHeight - 100) / 10);
   } else if (gender === "male") {
      idealWeight = personHeight - (100 + (personHeight - 100) / 20);
   }

   //отображение результата на странице
   resultContainer.textContent = `Ваш идеальный вес: ${Math.round(
      idealWeight
   )} кг`;
   };

//Привязка события submit к форме
form.addEventListener("submit", calculateIdealWeight);