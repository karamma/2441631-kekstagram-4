import { generateIndex, generateUrl, generateComment } from './generate-functions.js';

import { DESCRIPTIONS } from './data.js';

import { getRandomArrayElem, getRandomPositiveInteger } from './util.js';

import { renderPhotoes } from './rendering.js';

const createPhotoDescription = () => {
  const index = generateIndex();
  return {
    id: index,
    url: generateUrl(index),
    description: getRandomArrayElem(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15,200),
    comments: Array.from({length: 30},generateComment)
  };
};

// eslint-disable-next-line no-unused-vars
const photoDescriptions = Array.from({length: 25}, createPhotoDescription);

renderPhotoes(photoDescriptions);
