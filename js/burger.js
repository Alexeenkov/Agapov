$(document).ready(function() {
    $('.header-mobile__burger').click(function(event) {
        $('.header-mobile__burger, .header-mobile__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function() {
    $('.header-mobile__link').click(function(event) {
        $('.header-mobile__burger, .header-mobile__menu').removeClass('active');
        $('body').removeClass('lock')
    });
});