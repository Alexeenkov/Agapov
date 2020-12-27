$(document).ready(function() {
    $('.header-mobile__burger').click(function(event) {
        $('.header-mobile__burger,.header-mobile__menu').toggleClass('active');
        $('body').toggleClass('burger-lock');
    });
});