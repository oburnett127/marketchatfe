export const mockUsers = [
  'sugarsnuffle',
  'vineail',
  'brawnymute',
  'dodgeballwidely',
  'feistyexhibition',
  'woofcroquet',
  'flaxseedcomet',
  'lawonerous',
  'strongbegan',
  'erstmystery',
  'bulletgrounded',
  'ailservice',
  'relybeans',
  'centerden',
  'trialyourself',
  'claimconclude',
  'readmainly',
  'decreasingslacks',
  'inbornconspiracy',
  'draconianimportant',
  'pageantryelytra',
  'truthfuzzy',
  'variouscuddly',
  'undergoevening',
  'cottonpurpur',
  'canceldeparture',
  'excellentsignal',
  'poursmirk',
  'panzebra',
  'bloathoop',
  'fatherlethargic',
  'weepingmilky',
  'garboardabstracted',
  'doofuscollected',
  'irritatedinning',
  'comeclove',
  'wageflint',
  'cellwimp',
  'stripedrent',
  'poopspring',
  'enchiladafaulty',
  'onionscoffle',
  'querulousregional',
  'treblewander',
  'unlockpatsy',
  'divorcesunbonnet',
  'worseimpartial',
  'barksecond',
  'rejectkind',
  'reliablelard',
];

export const mockCommentList = [
  'Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ratione.',
  'Lorem, ipsum dolor.',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio modi nisi facilis eligendi nobis!',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'Lorem ipsum dolor sit.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aliquam nesciunt.',
];

export const getRandomAuthor = () => {
  return mockUsers[Math.floor(Math.random() * mockUsers.length)];
};

export const getRandomCommentBody = () => {
  return mockCommentList[Math.floor(Math.random() * mockCommentList.length)];
};

export const createRandomComments = () => {
  const numRandomComments = Math.floor(Math.random() * 100);
  const randomComments = [];

  for (let i = 0; i < numRandomComments; i++) {
    randomComments.push(
      mockCommentList[Math.floor(Math.random() * mockCommentList.length)]
    );
  }

  return randomComments;
};

export const createRandomCreationDate = () => {
  const year = 2022; // Keep it simple!
  const randomMonth = Math.floor(Math.random() * 4) + 1;
  const randomDay = Math.floor(Math.random() * 9) + 1;

  const randomDateString = `${year}${('0' + randomMonth).slice(-2)}${(
    '0' + randomDay
  ).slice(-2)}`;

  return randomDateString;
};
