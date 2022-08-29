'use strict'

const append = document.querySelector('div')
//Create an array of random values
const array = [1, 3, 5, 7, 9, 11, 13, 1]
//Write a function containing a conditional statement
function arr() {
  if (array[0] === array[array.length - 1]) {
    append.innerHTML = 'TRUE';
  }else{
    append.innerHTML = 'FALSE';
  }
};
arr();