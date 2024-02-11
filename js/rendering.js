/* eslint-disable no-unused-vars */
const pictureTemplate = document.querySelector('#picture').content;
const containerPictures = document.createDocumentFragment();

const renderPhotoes = (photoes) => {
  photoes.forEach(({_ingore, url, description, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('img').src = url;
    picture.querySelector('img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__likes').textContent = comments.length;
    containerPictures.append(picture);
  });
  const picturesOnSite = document.querySelector('.pictures.container').append(containerPictures);
};

export {renderPhotoes};
