//---Промисы
const myPromise = new Promise((resolve, reject) => {
   //отправляем запрос
   //пример успешного ответа
   const result = {
      status: "200",
      data: {
         name: "Bob",
         age: 43,
      },
   };

   /* const result = {
      status: '400',
      message: 'Bad request'
    } */

   setTimeout(() => {
      if (result.status === "200") {
         resolve(result.data);
      } else {
         reject(result.message);
      }
   }, 3000);
});

console.log(myPromise);

myPromise
   .then((data) => {
      console.log(data);
   })
   .catch((error) => {
      console.log(error);
   })
   .finally(() => {
      console.log("end");
   });
