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
  //condition dot
  if (this.textContent === '.' && score.textContent.includes('.')) return;
  if (this.textContent === '.' && score.textContent === '')
    return (score.textContent = '0.');
  //condition press more then once 0
  if (this.textContent === '0' && score.textContent === '0')
    return (score.textContent = '0.');
  console.log(score.textContent);
  score.textContent = nowy += this.textContent;
};

const operate = function () {
  if (score.textContent === '' && this.textContent === '-') {
    nowy = '-';
    score.textContent = '-';
    return;
  }
  if (score.textContent === '-' && this.textContent !== '') {
    console.log('fsdfsf');
  }
  if (mathSign.textContent !== '') {
    showResult();
  }
  previousNumber.textContent = score.textContent;
  mathSign.textContent = this.textContent;
  score.textContent = '';
  nowy = '';
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
        ? (result = 'DO NOT DO THIS!!!')
        : (result = +previousNumber.textContent / +score.textContent);
      break;
  }

  score.textContent = result;
  previousNumber.textContent = '';
  mathSign.textContent = '';
  nowy = '';
};
const clearAll = function () {
  result = '';
  score.textContent = '';
  mathSign.textContent = '';
  previousNumber.textContent = '';
  nowy = '';
};

number.forEach(btn => btn.addEventListener('click', displayNumbers));
operator.forEach(btn => btn.addEventListener('click', operate));
equal.addEventListener('click', showResult);
clear.addEventListener('click', clearAll);
