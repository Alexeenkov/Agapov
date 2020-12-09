new Swiper('.feedback-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Количество слайдов для показа
    slidesPerView: 1,
    // если слайдов меньше чем нужно
    watchOverflow: true,
    // Отступ между слайдами
    spaceBetween: 20,

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
    // Бесконечный слайдер
    loop: true,
    // Доступность для людей с ограниченными возможностями
    a11y: {
        // Включить/выключить
        enabled: true,
        // Сообщения
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        notificationClass: 'swiper-notification',
        containerMessage: '',
        containerRoleDescriptionMessage: '',
        itemRoleDescriptionMessage: '',
        // и т.д.
    },
    // Брейк поинты(адаптив)
    // Ширина экрана
    breakpoints: {
        520: {
            slidesPerView: 1,
        },
        790: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        }
    },
    // Корректная работа перетаскивания/свайпа для дочернего слайдера
    nested: true,
    // Переключение при клике на слайд
    slideToClickedSlide: false,
    // Автовысота
    // autoHeight: true,
});