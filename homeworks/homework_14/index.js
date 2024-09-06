let sendButton = document.querySelector('.result-button');
let mainForm = document.querySelector('.main-form');
let resultBlock = document.querySelector('.result-container');

let calcIdealWeight = (event)=>{
   event.preventDefault();
   let userHeightValue = document.querySelector('.height-input').value;
   //console.log(userHeightValue);
   let userGenderValue = mainForm.userGender.value;
   //console.log(userGenderValue);
   let userHeightNumber = Number(userHeightValue);
   let idealWeight;
   if(userGenderValue==='male'){
      idealWeight = userHeightNumber-(100 + (userHeightNumber-100)/10);
   }else if(userGenderValue==='female'){
      idealWeight = userHeightNumber-(100 + (userHeightNumber-100)/20);
   }
   idealWeight = Math.round(idealWeight);
   resultBlock.textContent = `Ваш идеальный вес: ${idealWeight} кг.`
   resultBlock.classList.add('show');
}

mainForm.addEventListener('submit', calcIdealWeight);