const getRandomPositiveInteger = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateUrl = (function (){
  const indexes = [];

  return () => {
    let index = getRandomPositiveInteger(1,25);
    if (indexes.length === 25) {
      console.log('Too much photoes');
      return null;
    }
    while (indexes.includes(index)) {
      index = getRandomPositiveInteger(1,25);
    }
    indexes.push(index);
    return `photos/${ index }.jpg`;
  };
}());

const generateMessage = () => {
  const message = [];
  const numOfSentances = getRandomPositiveInteger(1,2);
  const allMessages = 'Всё отлично!В целом всё неплохо.Но не всё.Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!'.replace('!','!.').split('.');
  for (let i = 0; i < numOfSentances; ++i) {
    message.push(allMessages[getRandomPositiveInteger(0,8)]);
  }
  return message;
};

const NAMES = ['Ava','Ethan','Sophia','Liam','Isabella','Mason','Olivia','Noah','Emma','Jackson','Mia','Aiden','Charlotte','Lucas'];

const generateComment = () => ({
  id: getRandomPositiveInteger(1,1000),
  avatar: `img/avatar-${ getRandomPositiveInteger(1,6) }.svg`,
  message: generateMessage(),
  name: NAMES[getRandomPositiveInteger(0,13)]
});


const DESCRIPTIONS  = [
  'A stunning sunset over the ocean, with vibrant hues of pink and orange painting the sky.',
  'A majestic mountain range, with snow-capped peaks towering over a lush green valley.',
  'A close-up of a delicate flower, with intricate petals in shades of purple and white.',
  'A bustling city street at night, with bright lights and tall buildings creating a vibrant atmosphere.',
  'A peaceful forest scene, with tall trees and a calm stream running through the middle.',
  'A striking black and white photograph of an old abandoned building, with broken windows and peeling paint.',
  'A close-up of a baby\'s tiny hand, with tiny fingers curled around an adult\'s finger.',
  'A serene beach scene, with crystal-clear water and white sand stretching as far as the eye can see.',
  'A dramatic lightning strike in the middle of a stormy sky, illuminating the dark clouds.',
  'A vibrant street market, with colorful fruits and vegetables on display and people bustling about.',
  'A majestic eagle soaring through the sky, with its wings spread wide.',
  'A stunning aerial view of a city skyline, with skyscrapers reaching towards the clouds.',
  'A beautiful winter landscape, with snow-covered trees and a frozen lake in the background.',
  'A cute puppy curled up in a cozy blanket, fast asleep.',
  'An impressive waterfall cascading down a rocky cliff, surrounded by lush greenery.',
  'A breathtaking view of a hot air balloon floating above a picturesque landscape.',
  'A close-up of a delicious-looking dessert, with layers of chocolate and cream.',
  'A peaceful countryside scene, with rolling hills and a charming farmhouse in the distance.',
  'A playful group of dolphins jumping out of the water, with their sleek bodies glistening in the sun.',
  'An incredible underwater photograph of colorful coral and exotic fish swimming in a reef.',
  'A stunning sunrise over a misty mountain range, with golden light illuminating the landscape.',
  'A close-up of an intricate piece of jewelry, with sparkling diamonds and intricate details.',
  'A beautiful garden scene, with blooming flowers and a tranquil pond in the center.',
  'A breathtaking view of a canyon, with towering rock formations and a winding river below.',
  'A peaceful lake scene, with calm water reflecting the surrounding trees and mountains.'
];

const createPhotoDescription = () => ({
  id: getRandomPositiveInteger(1,25),
  url: generateUrl(),
  description: DESCRIPTIONS[getRandomPositiveInteger(0,24)],
  likes: getRandomPositiveInteger(15,200),
  comments: Array.from({length: 30},generateComment)
});

const photoDescriptions = Array.from({length: 25}, createPhotoDescription);


