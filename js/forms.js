let buttonUp_1 = document.querySelector('.popup-tax__button-up_1');
let buttonBack_2 = document.querySelector('.popup-tax__button-back_2');
let buttonUp_2 = document.querySelector('.popup-tax__button-up_2');
let buttonBack_3 = document.querySelector('.popup-tax__button-back_3');
let buttonUp_3 = document.querySelector('.popup-tax__button-up_3');
let buttonBack_4 = document.querySelector('.popup-tax__button-back_4');
let container_1 = document.querySelector('.popup-tax__container_1');
let container_2 = document.querySelector('.popup-tax__container_2');
let container_3 = document.querySelector('.popup-tax__container_3');
let container_4 = document.querySelector('.popup-tax__container_4');
let progressValue = document.querySelector('.popup-tax__progress-value');

buttonUp_1.onclick = function() {
    container_1.classList.add('hide');
    container_2.classList.remove('hide');
    progressValue.classList.add('popup-tax__progress-value_2');
    const elements = document.querySelectorAll('span.popup-tax__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('1/3', '2/3');
    });
};

buttonUp_2.onclick = function() {
    container_2.classList.add('hide');
    container_3.classList.remove('hide');
    progressValue.classList.add('popup-tax__progress-value_3');
    progressValue.classList.remove('popup-tax__progress-value_2');
    const elements = document.querySelectorAll('span.popup-tax__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('2/3', '3/3');
    });
};

buttonBack_2.onclick = function() {
    container_1.classList.remove('hide');
    container_2.classList.add('hide');
    progressValue.classList.remove('popup-tax__progress-value_2');
    const elements = document.querySelectorAll('span.popup-tax__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('2/3', '1/3');
    });
};

buttonUp_3.onclick = function() {
    container_3.classList.add('hide');
    container_4.classList.remove('hide');
    progressValue.classList.add('popup-tax__progress-value_end');
    progressValue.classList.remove('popup-tax__progress-value_3');
    container_4.classList.remove('hide');
};

buttonBack_3.onclick = function() {
    container_2.classList.remove('hide');
    container_3.classList.add('hide');
    progressValue.classList.remove('popup-tax__progress-value_3');
    progressValue.classList.add('popup-tax__progress-value_2');
    const elements = document.querySelectorAll('span.popup-tax__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('3/3', '2/3');
    });
};

buttonBack_4.onclick = function() {
    container_3.classList.remove('hide');
    container_4.classList.add('hide');
    progressValue.classList.remove('popup-tax__progress-value_end');
    progressValue.classList.add('popup-tax__progress-value_3');
};