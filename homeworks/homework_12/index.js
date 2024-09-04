const arrayProcessor = (inputArray, callbackFn) =>{
   const stringArray = [];
   for(element of inputArray){
      stringArray.push(String(element));
   }
   return callbackFn(stringArray);
}

const convertArrayToUpper = (inputArray) => {
   const resultArray = [];
   for(element of inputArray){
      const upperStr = element.toUpperCase();
      resultArray.push(upperStr);
   }
   return resultArray;
}

const sumStringLengths = (inputArray) => {
   let summLength = 0;
   for(element of inputArray){
      summLength += element.length;
   }
   return summLength;
}

const inputArray = [10, false, undefined, 'cat'];

const result1 = arrayProcessor(inputArray, convertArrayToUpper);
const result2 = arrayProcessor(inputArray, sumStringLengths);
console.log(result1);
console.log(result2);
console.log(inputArray);