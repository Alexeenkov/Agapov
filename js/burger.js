let header__burger = document.querySelector('.header-mobile__burger');
let header_menu = document.querySelector('.header-mobile__menu');
let header__link = document.querySelectorAll('.header-mobile__link');

header__link.onclick = function() {
    header__burger.classList.remove('active');
    header_menu.classList.remove('active');
    body.classList.remove('burger-lock');
};

header__burger.onclick = function() {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('burger-lock');
};