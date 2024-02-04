const getRandomPositiveInteger = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomArrayElem = (mas) => mas[getRandomPositiveInteger(0, mas.length - 1)];

export {getRandomArrayElem, getRandomPositiveInteger};
