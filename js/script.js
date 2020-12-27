// ВОПРОСЫ КУПИТЬ ИЛИ ПРОДАТЬ КВАРТИРУ
let buy = document.querySelector('.buy');
let sale = document.querySelector('.sale');
let questions__buy = document.querySelector('.questions__buy');
let questions__sale = document.querySelector('.questions__sale');
let buy__button = document.querySelector('.buy__button');
let buy__sign = document.querySelector('.buy__sign');
let buy__new = document.querySelector('.buy__new');
let buy__old = document.querySelector('.buy__old');
let buy__title = document.querySelector('.buy__main-title');
let sale__title = document.querySelector('.sale__main-title');
let to__slide_buy = document.querySelector('.go-to-slide-buy');
let to__slide_sale = document.querySelector('.go-to-slide-sale');
let sale__button = document.querySelector('.sale__button');
let sale__block = document.querySelector('.sale__block');

questions__buy.onclick = function() {
    questions__buy.classList.add('close-to-left');
    questions__sale.classList.add('close-to-right');
    buy__button.classList.add('buy__button_active');
    buy__sign.classList.add('buy__sign_active');
    buy__new.classList.add('buy__new_active');
    buy__old.classList.add('buy__old_active');
    buy__title.classList.add('buy__main-title_active');
    sale.classList.add('hide');
}

questions__sale.onclick = function() {
    questions__buy.classList.add('close-to-left');
    questions__sale.classList.add('close-to-right');
    sale__title.classList.add('sale__main-title_active');
    sale__button.classList.add('sale__button_active');
    sale__block.classList.add('sale__block_active');
    buy.classList.add('hide');
}

to__slide_buy.onclick = function() {
    questions__buy.classList.add('close-to-left');
    questions__sale.classList.add('close-to-right');
    buy__button.classList.add('buy__button_active');
    buy__sign.classList.add('buy__sign_active');
    buy__new.classList.add('buy__new_active');
    buy__old.classList.add('buy__old_active');
    buy__title.classList.add('buy__main-title_active');
    sale.classList.add('hide');
    buy.classList.remove('hide');
}

to__slide_sale.onclick = function() {
    questions__buy.classList.add('close-to-left');
    questions__sale.classList.add('close-to-right');
    sale__title.classList.add('sale__main-title_active');
    sale__button.classList.add('sale__button_active');
    sale__block.classList.add('sale__block_active');
    buy.classList.add('hide');
    sale.classList.remove('hide');
}

// СЛАЙДЕР СВАЙПЕР

let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {
    // Свои классы
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    // Вертикальный слайдер
    direction: 'vertical',

    // Количество слайдов для показа
    slidesPerView: '1',

    // Включаем параллакс
    parallax: true,

    // Включение/отключение
    // перетаскивания на ПК
    simulateTouch: false,

    // Управление клавиатурой
    keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта на котором
        // будет срабатывать прокрутка мышью.
        //eventsTarget: ".image-slider"
    },

    // Отключение функционала
    // если слайдов меньше чем нужно
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении элементов слайдера
    observer: true,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Навигация 
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
    },
    // Скролл
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        // Возможность перетаскивать скролл
        draggable: true
    },

    // Отключаем автоинициализацию
    init: false,

    // События
    on: {
        // Событие инициализации
        init: function() {
            menuSlider();
            // setScrollType();
            wrapper.classList.add('_loaded');
        },
        // Событие смены слайда
        slideChange: function() {
                menuSliderRemove();
                menuLinks[pageSlider.realIndex].classList.add('_active');
            } //,
            // resize: function() {
            //     setScrollType();
            // }
    },
    // Отключить предзагрузку картинок
    preloadImages: false,
    // Lazy Loading
    // (подгрузка картинок)
    lazy: {
        // Подгрузить предыдущую
        // и следующую картинки
        loadPrevNext: true,
    },
    // Навигация по хэшу
    hashNavigation: {
        // Отслеживать состояние
        watchState: true,
    },
    longSwipesRatio: 0.1,
    followFinger: false,
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function(e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 800);
                menuLink.classList.add('_active');
                e.preventDefault();
            });
        }
    }
}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.menu__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

// function setScrollType() {
//     if (wrapper.classList.contains('_free')) {
//         wrapper.classList.remove('_free');
//         pageSlider.params.freeMode = false;
//     }
//     for (let index = 0; index < pageSlider.slides.length; index++) {
//         const pageSlide = pageSlider.slides[index];
//         const pageSlideContent = pageSlide.querySelector('.screen__content');
//         if (pageSlideContent) {
//             const pageSlideContentHeight = pageSlideContent.offsetHeight;
//             if (pageSlideContentHeight > window.innerHeight) {
//                 wrapper.classList.add('_free');
//                 pageSlider.params.freeMode = true;
//                 break;
//             }
//         }
//     }
// }

pageSlider.init();


// Выпадающее меню

let isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
    any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
let subMenuLink = document.querySelector('.sub-menu_active');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for (i = 0; i < arrow.length; i++) {
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];

        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function() {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
        subMenuLink.addEventListener('click', function() {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });


    }
} else {
    body.classList.add('mouse');
}