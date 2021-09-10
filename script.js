'use strict';
const score = document.querySelector('.score');
const tap = document.querySelector('.tap');
const clean = document.querySelector('.el-delete');
const button = document.querySelectorAll('.button');
const calculator = document.querySelector('.calculator');

/////////////tap

let currentTap;
let start = 0;

const init = function () {
  currentTap = '';
  console.log(currentTap);
  tap.textContent = 0;
};
init();

calculator.addEventListener('click', function (e) {
  const clicked = e.target.textContent;
  console.log(tap.textContent);
  // Matching strategy
  if (
    e.target.classList.contains('button')
    // ||
    // e.target.classList.contains('operation')
  ) {
    currentTap += clicked;
    console.log(clicked);
    tap.textContent = currentTap;
    console.log(tap.textContent);
  }
});
clean.addEventListener('click', init);

// 2nd option

// button.forEach(btn =>
//   btn.addEventListener('click', function (e) {
//     const clicked = e.target.textContent;
//     console.log(clicked);
//     tap.textContent = clicked;
//   })
// );
// console.log(document.querySelector('.el-1').textContent);
