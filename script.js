'use strict';

const previousNumber = document.querySelector('.previous-number');
const score = document.querySelector('.score');
const mathSign = document.querySelector('.math-sign');
const number = document.querySelectorAll('.number');
const equal = document.querySelector('.el-equal');
const clear = document.querySelector('.el-delete');
const operator = document.querySelectorAll('.operator');
// const comma = document.querySelectorAll('.el-comma');

let result = '';
let nowy = '';
const displayNumbers = function () {
  if (this.textContent === '.' && score.textContent.includes('.')) return;
  if (this.textContent === '.' && score.textContent === '')
    return (score.textContent = '0.');
  if (this.textContent === '0' && score.textContent === '0')
    return (score.textContent = '0.');
  if (result == '') return (score.textContent += this.textContent);
  result = '0';
  console.log(result);
  console.log(score.textContent);
  score.textContent += this.textContent;
  //  ? (score.textContent += this.textContent) : (result = '');
};

const operate = function () {
  if (score.textContent === '' && this.textContent === '') {
    score.textContent = '-';
  }
  if (score.textContent === '') return;
  // score.textContent += result + this.textContent;
  if (mathSign.textContent !== '') {
    showResult();
  }
  previousNumber.textContent = score.textContent;
  mathSign.textContent = this.textContent;
  score.textContent = '';
};

const showResult = function () {
  if (previousNumber.textContent === '' || score.textContent === '') return;

  switch (mathSign.textContent) {
    case '+':
      result = +score.textContent + +previousNumber.textContent;
      break;
    case '-':
      result = +previousNumber.textContent - +score.textContent;
      break;
    case '*':
      result = +score.textContent * +previousNumber.textContent;
      break;
    case '/':
      score.textContent === '0'
        ? (result = '')
        : (result = +previousNumber.textContent / +score.textContent);
      break;
  }
  // if (score.textContent === '0') return;
  if (result === '0') return;

  score.textContent = result;
  previousNumber.textContent = '';
  mathSign.textContent = '';
  

  // zrob kasowanie po nowym wprowadzeniu liczby po obliczeniu
  // if (
  //   result !== '0' &&
  //   previousNumber.textContent === '' &&
  //   mathSign.textContent === ''
  // ) {
  //   console.log('test');
  // }
};
const clearAll = function () {
  result = '';
  score.textContent = '';
  mathSign.textContent = '';
  previousNumber.textContent = '';
};

number.forEach(btn => btn.addEventListener('click', displayNumbers));
operator.forEach(btn => btn.addEventListener('click', operate));
equal.addEventListener('click', showResult);
clear.addEventListener('click', clearAll);
