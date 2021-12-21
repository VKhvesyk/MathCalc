'use strict';

document.addEventListener('DOMContentLoaded', function() {

const submit = document.querySelector('.main-form__submit'),
      firstNumber = document.querySelector('#main-form__first-number'),
      secondNumber = document.querySelector('#main-form__second-number'),
      selectOperator = document.querySelector('.main-form__operators-selector');

function calc(operator) {
    const result =  document.querySelector('#main-form__operation-result');

    switch (operator) {
        case '*':
            result.value = Math.floor(+firstNumber.value * +secondNumber.value);
            break;
        case '/':
            result.value = Math.floor(+firstNumber.value / +secondNumber.value);
            break;
        case '-':
            result.value = Math.floor(+firstNumber.value - +secondNumber.value);
            break;
        case '+':
            result.value = Math.floor(+firstNumber.value + +secondNumber.value);
            break;
    }
}

firstNumber.addEventListener('focus', () => {
    firstNumber.style.cssText = `
            border-color: #abdcf5;
        `
});

secondNumber.addEventListener('focus', () => {
    secondNumber.style.cssText = `
            border-color: #abdcf5;
        `
});

selectOperator.addEventListener('focus', () => {
    selectOperator.style.cssText = `
            border-color: #abdcf5;
        `
})

submit.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (firstNumber.value == '' || secondNumber.value == '') {
        alert('Для отримання результату заповніть, будь-ласка, всі поля вводу');
    }
    if (firstNumber.value == '') {
        firstNumber.style.cssText = `
            border-color: red;
        `
    }
    if (secondNumber.value == '') {
        secondNumber.style.cssText = `
            border-color: red;
        `
    }
    if (selectOperator.value == '') {
        selectOperator.style.cssText = `
            border-color: red;
        `
    }

    calc(selectOperator.value);
});


});