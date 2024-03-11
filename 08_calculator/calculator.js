const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (x, y) {
  return x + y;
};

const multiply = function (a, b) {
  return a * b;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
