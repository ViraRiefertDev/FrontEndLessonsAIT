//Вариант 1 - без кнопки
//const timer = document.querySelector('.timer');

/* const startTimer = () => {
   let seconds = 60;
   //Функция уменьшает таймер на 1 при каждом вызове
   const updateTimer = () => {
      timer.textContent = seconds;
      seconds--;

      //проверяем условия для остановки таймера
      if(seconds<0){
         clearInterval(timerId);
      }
   };

   //Запускаем функцию updateTimer каждую секунду
   const timerId = setInterval(updateTimer,1000);
   //проверяем условия для остановки таймера
   
}; */

//startTimer();

//Вариант 2 - с кнопкой
const timer = document.querySelector('.timer');
const timerStart = document.querySelector('.timer-button');

const startTimer = () => {
   let seconds = 60;
   //Функция уменьшает таймер на 1 при каждом вызове
   timerStart.setAttribute('disabled', '');
   const updateTimer = () => {
      timer.textContent = seconds;
      seconds--;

      //проверяем условия для остановки таймера
      if(seconds<0){
         timerStart.removeAttribute('disabled');
         clearInterval(timerId);

      }
   };

   //Запускаем функцию updateTimer каждую секунду
   const timerId = setInterval(updateTimer,1000);
};

timerStart.addEventListener('click', startTimer);
