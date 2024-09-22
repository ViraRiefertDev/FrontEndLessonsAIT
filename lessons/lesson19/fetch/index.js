//-----Отправка запроса и обработка результата при нажатии на кнопку
const dataContainer = document.querySelector(".data-container");
const loadingId = document.querySelector("#load-ind");
const getDataButton = document.querySelector("#request-button");

//Добавляем класс hidden, чтоб при загрузке страницы скрывать спиннер

//Делаем простую копию fetch
//создаем функцию, которая отправляет запрос
const customFetch = () => {
   const promise = new Promise((resolve, reject) => {
      //отправка запроса
      //создаем пример положительного ответа от сервера
      const response = {
         status: "200",
         data: {
            firstName: "John",
            lastName: "Johnson",
            age: 34,
         },
      };

      //создаем пример отрицательного ответа от сервера
      /*  const response = {
         status: "400",
         error: "Bad request",
      }; */

      setTimeout(() => {
         if (response.status === "200") {
            resolve(response.data);
         } else {
            reject(response.error);
         }
      }, 3000);
   });
   return promise;
};

/* console.log(customFetch()); */

//функция для обработки результата
const getData = () => {
   dataContainer.innerHTML = ``;
   //убираем класс .hidden для надписи loading...
   loadingId.classList.remove("hidden");
   //блокируем кнопку
   getDataButton.setAttribute("disabled", "");
   const promise = customFetch();
   promise
      .then((data) => {
         dataContainer.innerHTML = `
      <h2>User Data</h2>
      <div>Name: ${data.firstName}</div>
      <div>Surname: ${data.lastName}</div>
      <div>Age: ${data.age}</div>
      `;
      })
      .catch((error) => {
         dataContainer.classList.add("error");
         dataContainer.textContent = error;
      })
      .finally(() => {
         getDataButton.removeAttribute("disabled");
         loadingId.classList.add("hidden");
      });
};

//getDataButton.addEventListener("click", getData);

/* async function f() {
   
   let promise = new Promise((resolve, reject) => {
      setTimeout(()=>resolve('Готово!'),5000);
   });

   let result = await promise; //будет ждать, пока промис не выполнится

   alert(result); // Готово! 
}
f(); */

/* async function f() {
   
   try{
      let response = await fetch('/no-user-here');
      let user = await response.json();
   }catch(err){
      //перехватит любую ошибку в блоке try: и в fetch, и в response.json 
      alert(err);
   }
}
f(); */

//-----Отправка запроса - fetch (async await)
const getCatFactsButton = document.querySelector("#get-cats-fact");
const factsBlock = document.querySelector(".data-container");

const getCatFact = async () => {
   factsBlock.classList.remove('error');
   factsBlock.textContent = '';
   try {
      const response = await fetch("https://catfact.ninja/fact", {
         method: "GET",
      });
      //метод GET по умолчанию, значит второй аргумент можно не указывать
      /* console.log(response); */

      const catFactData = await response.json();
      /* console.log(catFactData); */
      //самостоятельное формирование исключения (ошибки), для перехода выполнения кода в блок catch
      if (response.ok) {
         factsBlock.textContent =catFactData.fact;
      } else {
         //Object.assign позволяет сформировать новый объект
         throw Object.assign(new Error("Some error"), {
            responseError: catFactData,
         });
      }
   } catch (error) {
      console.log(error.responseError);
      factsBlock.classList.add('error');
      factsBlock.textContent = `${error.responseError.code}: ${error.responseError.message}`
   }
};
//Перегружаем сервер
/* setInterval(getCatFact, 50); */

getCatFactsButton.addEventListener("click", getCatFact);
