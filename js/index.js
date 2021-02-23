const menuOpen = document.querySelector('.header__menu-button');
const menuClose = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');
const menuBody = document.querySelector('.menu__body');
const form = document.querySelector('.form');

menuOpen.addEventListener('click', () => {
  menu.classList.add('open');
  document.body.style.overflowY = 'hidden';
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('open');
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Oops :) It's a demo version of website. And then form doesn't work :(")
});

AOS.init();