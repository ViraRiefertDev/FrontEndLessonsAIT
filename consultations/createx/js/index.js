//При нажатии на header__Burger должен добавиться класс к header__burger и  header__menu
// К боди должен добавиться класс lock чтоб под бургером не скролилось меню

const headerBurger = document.querySelector('.header__burger');

const headerMenu = document.querySelector('.header__menu');

const header = document.querySelector('.header');

const body = document.body;



const activeBurger = ()=>{
   headerBurger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   header.classList.toggle('active');
   body.classList.toggle('lock');
}

headerBurger.addEventListener('click', activeBurger);