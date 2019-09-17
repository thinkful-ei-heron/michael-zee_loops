'use strict';
function max(numbers) {
  let numMax = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > numMax) {
      numMax = numbers[i];
    }
    i++;
  }
  return numMax;
}

function min(numbers) {
  let numMin = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] < numMin) {
      numMin = numbers[i];
    }
    i++;
  }
  return numMin;
}

function average(numbers) {
  let sum = 0;
  numbers.forEach(number => sum += number);
  return sum/numbers.length;
}