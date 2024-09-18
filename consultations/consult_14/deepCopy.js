//Глубокое копирование массива и объекта
const getDeepClone = (obj)=>{
   //проверка, является ли переданный объект примитивом 
   //или null(т.к typeof показывает, что null это объект)
   if(obj == null || typeof obj != 'object'){
      return obj;
   }
   //проверка: является ли переданный аргумент массивом
   if(Array.isArray(obj)){
      const arrCopy = [];
      for(let item of obj){
         arrCopy.push(getDeepClone(item));
      }
      return arrCopy;
   }
   //проверка: является ли переданный аргумент объектом
   const objCopy = {};
   for(let key in obj){
      if(obj.hasOwnProperty(key)) {
         objCopy[key]=getDeepClone(obj[key]);
      }
   }
   return objCopy;
}

const obj = {
   number: 10,
   dog:{
      name: 'Nyscha',
      age: 4,
      friends: ['Mama', 'Papa','Katja'],
   },
   colors: ['red','green','black'],
   
}

const copyObj = getDeepClone(obj);
console.log(obj);
/* console.log(copyObj); */

copyObj.number = 1;
copyObj.dog.age = 12;
copyObj.dog.friends[0] = 'Vitja';
copyObj.colors['2'] = 'purple';
console.log(obj);
console.log(copyObj);

