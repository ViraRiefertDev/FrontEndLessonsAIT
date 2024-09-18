const timerBlock = document.querySelector('.timer-block');
const btn = document.querySelector('.btn');

let idArray = [];
const startTimer = ()=>{
   //Очищаем таймеры с прошлого запуска
   if(idArray.length>0){
      for(let id of idArray){
         clearTimeout(id);
      }
      idArray = [];
   }
   for(let i = 60; i>=0;i--){
      let timerId = setTimeout(()=>{
         timerBlock.innerHTML = '';
         timerBlock.textContent = i+'s';
      },(60-i)*1000);
      idArray.push(timerId);
   }
}

btn.addEventListener('click', startTimer);
