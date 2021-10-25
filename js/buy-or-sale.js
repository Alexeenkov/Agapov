// // ВОПРОСЫ КУПИТЬ ИЛИ ПРОДАТЬ КВАРТИРУ
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
let to__slide_buy_desktop = document.querySelector('.go-to-slide-buy-desktop');
let to__slide_sale_desktop = document.querySelector('.go-to-slide-sale-desktop');
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

to__slide_buy_desktop.onclick = function() {
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

to__slide_sale_desktop.onclick = function() {
    questions__buy.classList.add('close-to-left');
    questions__sale.classList.add('close-to-right');
    sale__title.classList.add('sale__main-title_active');
    sale__button.classList.add('sale__button_active');
    sale__block.classList.add('sale__block_active');
    buy.classList.add('hide');
    sale.classList.remove('hide');
}