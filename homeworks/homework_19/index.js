const dataContainerSetup = document.querySelector(".data-container__setup");
const dataContainerPunchline = document.querySelector(
   ".data-container__punchline"
);
const loadId = document.querySelector("#load-ind");
const getJokeButton = document.querySelector("#get-joke-button");

const getJoke = async () => {
   dataContainerSetup.classList.remove("error");
   getJokeButton.setAttribute("disabled", "");
   loadId.classList.remove("hidden");
   dataContainerSetup.textContent = "";
   dataContainerPunchline.textContent = "";
   try {
      const response = await fetch(
         "https://official-joke-api.appspot.com/random_joke"
      );
      loadId.classList.add("hidden");
      /* console.log(response); */
      const result = await response.json();
      /*  console.log(result); */
      if (response.ok) {
         dataContainerSetup.textContent = result.setup;
         setTimeout(() => {
            dataContainerPunchline.textContent = result.punchline;
            getJokeButton.removeAttribute("disabled");
         }, 2000);
      } else {
         console.log(response);
         console.log(result);
         throw Object.assign(new Error("new Error"), {
            responseError: result,
         });
      }
   } catch (error) {
      console.log(error.responseError);
      dataContainerSetup.classList.add("error");
      dataContainerSetup.textContent = error.responseError.message;
   }
};

//Перегружаем сервер
/* setInterval(getJoke, 40); */

getJokeButton.addEventListener("click", getJoke);
