// ! ============================= tax-test ========================================

let tax_buttonUp_1 = document.querySelector('.tax-test__button-up_1');
let tax_buttonBack_2 = document.querySelector('.tax-test__button-back_2');
let tax_buttonUp_2 = document.querySelector('.tax-test__button-up_2');
let tax_buttonBack_3 = document.querySelector('.tax-test__button-back_3');
let tax_buttonUp_3 = document.querySelector('.tax-test__button-up_3');
let tax_buttonBack_4 = document.querySelector('.tax-test__button-back_4');
let tax_container_1 = document.querySelector('.tax-test__container-1');
let tax_container_2 = document.querySelector('.tax-test__container-2');
let tax_container_3 = document.querySelector('.tax-test__container-3');
let tax_container_4 = document.querySelector('.tax-test__container-4');
let tax_progressValue = document.querySelector('.tax-test__progress-value');

tax_buttonUp_1.onclick = function() {
    tax_container_1.classList.add('hide');
    tax_container_2.classList.remove('hide');
    tax_progressValue.classList.add('tax-test__progress-value_2');
    const elements = document.querySelectorAll('span.tax-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('1/3', '2/3');
    });
};

tax_buttonUp_2.onclick = function() {
    tax_container_2.classList.add('hide');
    tax_container_3.classList.remove('hide');
    tax_progressValue.classList.add('tax-test__progress-value_3');
    tax_progressValue.classList.remove('tax-test__progress-value_2');
    const elements = document.querySelectorAll('span.tax-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('2/3', '3/3');
    });
};

tax_buttonBack_2.onclick = function() {
    tax_container_1.classList.remove('hide');
    tax_container_2.classList.add('hide');
    tax_progressValue.classList.remove('tax-test__progress-value_2');
    const elements = document.querySelectorAll('span.tax-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('2/3', '1/3');
    });
};

tax_buttonUp_3.onclick = function() {
    tax_container_3.classList.add('hide');
    tax_container_4.classList.remove('hide');
    tax_progressValue.classList.add('tax-test__progress-value_end');
    tax_progressValue.classList.remove('tax-test__progress-value_3');
    const elements = document.querySelectorAll('span.tax-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('3/3', '');
    });
};

tax_buttonBack_3.onclick = function() {
    tax_container_2.classList.remove('hide');
    tax_container_3.classList.add('hide');
    tax_progressValue.classList.remove('tax-test__progress-value_3');
    tax_progressValue.classList.add('tax-test__progress-value_2');
    const elements = document.querySelectorAll('span.tax-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('3/3', '2/3');
    });
};

tax_buttonBack_4.onclick = function() {
    tax_container_3.classList.remove('hide');
    tax_container_4.classList.add('hide');
    tax_progressValue.classList.remove('tax-test__progress-value_end');
    tax_progressValue.classList.add('tax-test__progress-value_3');
    const elements = document.querySelectorAll('span.tax-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('', '3/3');
    });
};

// ! ============================= cost-test ========================================

let cost_buttonUp_1 = document.querySelector('.cost-test__button-up_1');
let cost_buttonBack_2 = document.querySelector('.cost-test__button-back_2');
let cost_buttonUp_2 = document.querySelector('.cost-test__button-up_2');
let cost_buttonBack_3 = document.querySelector('.cost-test__button-back_3');
let cost_buttonUp_3 = document.querySelector('.cost-test__button-up_3');
let cost_buttonBack_4 = document.querySelector('.cost-test__button-back_4');
let cost_buttonUp_4 = document.querySelector('.cost-test__button-up_4');
let cost_buttonBack_5 = document.querySelector('.cost-test__button-back_5');
let cost_buttonUp_5 = document.querySelector('.cost-test__button-up_5');
let cost_buttonBack_6 = document.querySelector('.cost-test__button-back_6');
let cost_buttonUp_6 = document.querySelector('.cost-test__button-up_6');
let cost_buttonBack_7 = document.querySelector('.cost-test__button-back_7');
let cost_container_1 = document.querySelector('.cost-test__container-1');
let cost_container_2 = document.querySelector('.cost-test__container-2');
let cost_container_3 = document.querySelector('.cost-test__container-3');
let cost_container_4 = document.querySelector('.cost-test__container-4');
let cost_container_5 = document.querySelector('.cost-test__container-5');
let cost_container_6 = document.querySelector('.cost-test__container-6');
let cost_container_7 = document.querySelector('.cost-test__container-7');
let cost_progressValue = document.querySelector('.cost-test__progress-value');

cost_buttonUp_1.onclick = function() {
    cost_container_1.classList.add('hide');
    cost_container_2.classList.remove('hide');
    cost_progressValue.classList.add('cost-test__progress-value_2');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('1/6', '2/6');
    });
};

cost_buttonUp_2.onclick = function() {
    cost_container_2.classList.add('hide');
    cost_container_3.classList.remove('hide');
    cost_progressValue.classList.add('cost-test__progress-value_3');
    cost_progressValue.classList.remove('cost-test__progress-value_2');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('2/6', '3/6');
    });
};

cost_buttonBack_2.onclick = function() {
    cost_container_1.classList.remove('hide');
    cost_container_2.classList.add('hide');
    cost_progressValue.classList.remove('cost-test__progress-value_2');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('2/6', '1/6');
    });
};

cost_buttonUp_3.onclick = function() {
    cost_container_3.classList.add('hide');
    cost_container_4.classList.remove('hide');
    cost_progressValue.classList.add('cost-test__progress-value_4');
    cost_progressValue.classList.remove('cost-test__progress-value_3');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('3/6', '4/6');
    });
};

cost_buttonBack_3.onclick = function() {
    cost_container_2.classList.remove('hide');
    cost_container_3.classList.add('hide');
    cost_progressValue.classList.remove('cost-test__progress-value_3');
    cost_progressValue.classList.add('cost-test__progress-value_2');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('3/6', '2/6');
    });
};

cost_buttonUp_4.onclick = function() {
    cost_container_4.classList.add('hide');
    cost_container_5.classList.remove('hide');
    cost_progressValue.classList.add('cost-test__progress-value_5');
    cost_progressValue.classList.remove('cost-test__progress-value_4');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('4/6', '5/6');
    });
};

cost_buttonBack_4.onclick = function() {
    cost_container_3.classList.remove('hide');
    cost_container_4.classList.add('hide');
    cost_progressValue.classList.remove('cost-test__progress-value_4');
    cost_progressValue.classList.add('cost-test__progress-value_3');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('4/6', '3/6');
    });
};

cost_buttonUp_5.onclick = function() {
    cost_container_5.classList.add('hide');
    cost_container_6.classList.remove('hide');
    cost_progressValue.classList.add('cost-test__progress-value_6');
    cost_progressValue.classList.remove('cost-test__progress-value_5');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('5/6', '6/6');
    });
};

cost_buttonBack_5.onclick = function() {
    cost_container_4.classList.remove('hide');
    cost_container_5.classList.add('hide');
    cost_progressValue.classList.remove('cost-test__progress-value_5');
    cost_progressValue.classList.add('cost-test__progress-value_4');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('5/6', '4/6');
    });
};

cost_buttonUp_6.onclick = function() {
    cost_container_6.classList.add('hide');
    cost_container_7.classList.remove('hide');
    cost_progressValue.classList.add('cost-test__progress-value_end');
    cost_progressValue.classList.remove('cost-test__progress-value_6');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('6/6', '');
    });
};

cost_buttonBack_6.onclick = function() {
    cost_container_5.classList.remove('hide');
    cost_container_6.classList.add('hide');
    cost_progressValue.classList.remove('cost-test__progress-value_6');
    cost_progressValue.classList.add('cost-test__progress-value_5');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('6/6', '5/6');
    });
};

cost_buttonBack_7.onclick = function() {
    cost_container_6.classList.remove('hide');
    cost_container_7.classList.add('hide');
    cost_progressValue.classList.remove('cost-test__progress-value_end');
    cost_progressValue.classList.add('cost-test__progress-value_6');
    const elements = document.querySelectorAll('span.cost-test__page');
    elements.forEach((element) => {
        element.textContent = element.textContent.replace('', '6/6');
    });
};