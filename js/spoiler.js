$('document').ready(function() {

    // Начальное состояние
    my_func();

    $(window).resize(function() {
        // При изменении ширины окна
        my_func();
    });

    window.onorientationchange = function() {
        // При смене ориентации с портретной на пейзажную или обратно
        my_func();
    };

    function my_func() {
        // Считываем значение из CSS
        let browserMaxWidth = parseInt($('body').css('max-width'), 10);

        if (browserMaxWidth == 599 || browserMaxWidth == 899) {
            // какие-то манипуляции
            //определяем единицу vh для мобильных браузеров
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            $('.offers__title').click(function(event) {
                if ($('.offers').hasClass('one')) {
                    $('.offers__title').not($(this)).removeClass('active');
                    $('.offers__text').not($(this).next()).slideUp(300);
                }
                $(this).toggleClass('active').next().slideToggle(300);
            });
        }
    }
});