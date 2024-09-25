const getJokeButton = document.querySelector("#get-joke-button");
const dataContainer = document.querySelector(".data-container");

const getJoke = async () => {
   try {
      const response = await fetch(
         "https://official-joke-api.appspot.com/random_joke"
      );
      console.log(response);

      const result = await response.json();
      console.log(result);

      if(response.ok){
         dataContainer.textContent = `${result.setup} - ${result.punchline}`
      }else{
         throw Object.assign(new Error('Some error'), {responseError: result});
      }
   } catch(error) {
      //временная обработка, так как нет примера объекта ошибки сервера
      dataContainer.textContent =  error.responseError.message;
   }
};

getJokeButton.addEventListener("click", getJoke);
