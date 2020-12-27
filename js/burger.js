let header__burger = document.querySelector('.header-mobile__burger');
let header_menu = document.querySelector('.header-mobile__menu');
const header__link = document.querySelectorAll('.header-mobile__link');

header__burger.onclick = function() {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('burger-lock');
};

if (header__link.length > 0) {
    for (let index = 0; index < header__link.length; index++) {
        const header__link = header__link[index];
        header__link.addEventListener("click", function(e) {
            header__burger.classList.remove('active');
            header_menu.classList.remove('active');
            body.classList.remove('burger-lock');
            e.preventDefault();
        });
    }
}