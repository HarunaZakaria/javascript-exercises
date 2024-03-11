const palindromes = function (str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
