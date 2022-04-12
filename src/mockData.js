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
  "That's because most of their compensation comes in stock, either options or restricted stock, and once they retire most of their income will come from gains on their stock portfolios.",
  'Indeed, the point of executive stock options and stock awards is to give executives an incentive to take actions that increase the company’s stock price.',
  'In the case of stock options, the mathematical models, known as Black-Scholes-Merton, that are used to generate EFV assume that stock-price changes are distributed such that one should expect lots of small changes but very few large changes in stock prices.',
  'A rough day that was made worse by technical problems that kept many big traders from even knowing how much stock they owned. Facebook itself will be fine, however, as they got exactly what they wanted from the stock sale: $38 a share, with no outsiders taking away millions in value by flipping the stock for a quick profit.',
  'Other studies suggest that compensating a CEO with stock options—which become more valuable as a stock’s price rises, but don’t cost him anything if the stock’s price falls—increases the likelihood of product recalls [10] and shareholder lawsuits [11].',
  'It bases returns on the unpredictable performance of professional athletes, it gives stock that can only be traded on a private, relatively illiquid exchange, and its single-athlete stock can be converted into common Fantex stock whenever the company feels like it.',
  "But what's scary is that these bad investments won't result in a crash like 2008.",
  'The forms list the value of Trump’s Boeing stock as “None (or less than $1,001)” with income of between $5,001 and $15,000, which means Trump currently owns less than $1,001 in Boeing stock, but earned between $5,001 and $15,000 from stock in the company (perhaps from its appreciation, or perhaps from selling it) over the previous 12 months.',
  "And, if you're of that optimistic variant, the stock really is a bargain deal now.  What it means for people who bought stock in Facebook: Speaking of good deals, that is exactly the opposite of what people who bought stock on day one got.",
  'Stock symbols date back to the invention of the stock telegraph ticker by Thomas Edison in 1870. Just as today, the symbol was used as universal shorthand for the name of the stock, and in order to save time, the shorter symbols were assigned to the blue chip stocks that were trader more frequently, like U.S.',
  "But business profits and stocks have seen ridiculous gains: In 2013, the stock market (at least, as measured by the Dow and the S&P 500 indices) had its best year since the mid-1990s. The stock market's run is good news for anybody with a portfolio, but 80 percent of stock wealth is held by the richest 10 percent of households.",
  'The Importance of Accounting for stock-Based Pay EFV tends to understate ARG because its estimation methods, which seek to value stock-based pay in advance of realized gains, fail to capture actual stock-price increases and the timing of realized gains.',
  'The report “caused panic” in China’s stock markets, the state-run Global Times explained Tuesday: “I shouldn’t have published a report that had huge bad influence to the stock market in such a sensitive time, and caused such great losses to the country and stock investors for catching readers’ eyes,” Wang said during his public confession.',
  "Upon vesting, the RSUs are considered income (a portion of the vested shares are used to pay income tax.) The remaining shares can be cashed out.  The internal memo states that because 'restricted stock unit (RSU) awards are not actual shares of stock, participants who hold stock options or RSUs will not receive this dividend of Time Inc.'",
  'In 90, the Tokyo stock Exchange accounted for 60 percent of the world stock market value.',
  'On some days, our purchases were more than 10 percent of the company’s stock activity on the New York stock Exchange.',
  'It will also encourage investors who are allocated IPO stock to hold onto it instead of blowing out their positions when the stock opens.',
  "Earlier in the day, the stock was down more than 10%. Bloomberg reports that it's the company's biggest stock loss in five months.",
  "Considering that all the stock indexes (Dow Jones, NASDAQ, S&P 500) were down on Thursday, a break-even afternoon for one particular stock isn't too shabby.",
  'Then when the stock surged upon hitting the market, the story shifted to how amazingly well the stock was doing.',
];

export const mockTitleList = [
  'Roll With the Punches',
  'Cut To The Chase',
  'Talk the Talk',
  "If You Can't Stand the Heat, Get Out of the Kitchen",
  'A Lot on One’s Plate',
  'On the Same Page',
  "Off One's Base",
  'Ride Him, Cowboy!',
  "Fool's Gold",
  'Meaning: Iron pyrities is a worthless mineral that resembles gold.',
  'Son of a Gun',
  'A Hair’s Breadth',
  'Go For Broke',
  'Beating a Dead Horse',
  'Swinging For the Fences',
  "It's Not Brain Surgery",
  'Keep Your Shirt On',
  'Foaming At The Mouth',
  'Quality Time',
  'Put a Sock In It',
  'Hands Down',
];

export const getRandomAuthor = () => {
  return mockUsers[Math.floor(Math.random() * mockUsers.length)];
};

export const getRandomTitle = () => {
  return mockTitleList[Math.floor(Math.random() * mockTitleList.length)];
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
