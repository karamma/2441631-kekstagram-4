import {getRandomArrayElem, getRandomPositiveInteger} from './util.js';
import {NAMES, MESSAGES} from './data.js';

const generateIndex = (function () {
  let index = 0;
  return () => {
    index+=1;
    return index;
  };
}) ();

const generateUrl = (index) => `photos/${ index }.jpg`;


const generateMessage = () => Array.from(
  {length: getRandomPositiveInteger(1,2)}
  ,() => getRandomArrayElem(MESSAGES)).join(' ');


const generateComment = () => ({
  id: getRandomPositiveInteger(1,1000),
  avatar: `img/avatar-${ getRandomPositiveInteger(1,6) }.svg`,
  message: generateMessage(),
  name: getRandomArrayElem(NAMES)
});

export {generateIndex, generateUrl, generateMessage, generateComment};
