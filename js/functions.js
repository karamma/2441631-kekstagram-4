const checkLenght = (string, maxLength) => string.length <= maxLength;

const checkPalindrom = (string) => {
  const trimString = string.replaceAll(' ', '').toLowerCase();
  const length = trimString.length - 1;
  for (let i = 0; i < length / 2; ++i) {
    if (trimString[i] !== trimString[length - i]) {
      return false;
    }
  }
  return true;
};

const extractNumber = (string) => {
  const str = string.toString();
  let number = '';
  for (let i = 0; i < str.length; ++i) {
    if ( !isNaN(parseInt(str[i], 10)) ) {
      number += str[i];
    }
  }
  return (number !== '') ? parseInt(number, 10) : NaN;
};
