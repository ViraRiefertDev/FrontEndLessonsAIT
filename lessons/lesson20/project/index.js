/* 
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
68d1ff1a7a5bc8351bf4a817fd203e1d
*/
const API_KEY = "68d1ff1a7a5bc8351bf4a817fd203e1d";
const inputDataCity = document.querySelector("#city_");
const sendDataButton = document.querySelector(".send-data");
const resultContainer = document.querySelector(".result-container");
const spinner = document.querySelector(".spinner");
const iconImg = document.querySelector(".icon");

const getWeatherFunction = async () => {
   iconImg.classList.add('remove-block');
   resultContainer.classList.remove("show-block");
   spinner.classList.add('show-block');
   //Считываем данные с инпута
   const city = inputDataCity.value.trim();
   if (city === "") {
      spinner.classList.remove('show-block');
      setTimeout(()=>{alert("Введите знавание города")},0);
   } else {
      try {
         const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
         );
         const result = await response.json();
         

         if(response.ok){
         const tempInK = result.main.temp;
         const cityName = result.name;
         const tempInC = Math.round(tempInK - 273.15);
         spinner.classList.remove('show-block')
         resultContainer.classList.add("show-block");
         resultContainer.textContent = `${cityName}: ${tempInC} ℃`;
         //вытаскиваем иконку
         const iconId = result.weather[0].icon;
         const iconData = await fetch(`http://openweathermap.org/img/w/${iconId}.png`)
         const iconUrl = iconData.url;
         iconImg.classList.remove('remove-block');
         iconImg.setAttribute('src', iconUrl);

         }else{
            throw(`${result.cod}: ${result.message}`);
         }
      } catch (error) {
         spinner.classList.remove('show-block')
         resultContainer.classList.add("show-block");
         resultContainer.textContent = error;
      }
   }
};

sendDataButton.addEventListener("click", getWeatherFunction);
