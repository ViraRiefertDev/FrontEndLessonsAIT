//----Prototypes-------
const band = {
   bandType: "Rock",
};

//console.log(band.bandType);
//console.log(band.__proto__);

const musician = {
   __proto__: band,
   isSign: true,
   isPlay: true,
   play() {
      console.log("Bum!");
   },
};

//console.log(musician.bandType);
//console.log(musician.__proto__);

const eltonJohn = {
   name: "Elton John",
};
eltonJohn.__proto__ = musician;
eltonJohn.play();

eltonJohn.play = () => {
   console.log("Play piano");
};
eltonJohn.play();
musician.play();

console.log(eltonJohn.bandType);
console.log(eltonJohn.__proto__);

const michaelJackson = {
   name: "Michael Jackson",
};

Object.setPrototypeOf(michaelJackson, musician);
console.log(Object.getPrototypeOf(michaelJackson));

//---Classes-----
class Wizard {
   constructor(nameWizard, houseWizard) {
      this.name = nameWizard;
      this.house = houseWizard;
   }
   introduce() {
      console.log(`I'm ${this.name} from ${this.house}`);
   }
}

//создание экземпляра класса
const harry = new Wizard("Harry Potter", "Gryffindor");
console.log(harry);
harry.introduce();

//const hermiona = new Wizard('Hermiona Granger','Gryffindor');
//hermiona.introduce();

//Наследование классов
class DarkWizzard extends Wizard {
   constructor(nameWizard, houseWizard, darkPower) {
      super(nameWizard, houseWizard);
      this.darkPower = darkPower;
   }

   useDarkPower() {
      console.log(
         `I'm ${this.name} from ${this.house} and uses dark power ${this.darkPower}`
      );
   }
}
console.log(DarkWizzard);
const voldemort = new DarkWizzard(
   "Lord Voldemort",
   "Slytherin",
   "Avada Kedavra"
);
voldemort.useDarkPower();
