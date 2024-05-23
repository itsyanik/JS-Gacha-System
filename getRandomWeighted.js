// Ideally, the sum will be 1 so it is more balanced
const heroes = [
  // Legendaries
  {
    name: "Frieren",
    rarity: "Legendary",
    rate: 0.01,
  },
  {
    name: "Fern",
    rarity: "Legendary",
    rate: 0.01,
  },
  {
    name: "Flamme",
    rarity: "Legendary",
    rate: 0.01,
  },
  {
    name: "Serie",
    rarity: "Legendary",
    rate: 0.01,
  },
  // Epics
  {
    name: "Eisen",
    rarity: "Epic",
    rate: 0.025,
  },
  {
    name: "Heiter",
    rarity: "Epic",
    rate: 0.025,
  },
  {
    name: "Stark",
    rarity: "Epic",
    rate: 0.025,
  },
  {
    name: "Kraft",
    rarity: "Epic",
    rate: 0.025,
  },
  {
    name: "Graf",
    rarity: "Epic",
    rate: 0.025,
  },
  // Rares
  {
    name: "Aura",
    rarity: "Rare",
    rate: 0.03,
  },
  {
    name: "Lugner",
    rarity: "Rare",
    rate: 0.03,
  },
  {
    name: "Linie",
    rarity: "Rare",
    rate: 0.03,
  },
  {
    name: "Draht",
    rarity: "Rare",
    rate: 0.03,
  },
  // Commons
  {
    name: "Lawine",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Kanne",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Land",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Ubel",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Wirbel",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Scharf",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Ehre",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Denken",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Richter",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Laufen",
    rarity: "Common",
    rate: 0.7,
  },
  {
    name: "Genau",
    rarity: "Common",
    rate: 0.7,
  },
];

function getRandomWeighted(options) {
  const rates = options.map((option) => option.rate);
  const totalSum = rates.reduce((acc, item) => acc + item, 0);

  let runningTotal = 0;
  const cumulativeValues = options.map((option) => {
    const relativeValue = option.rate / totalSum;

    const cumulativeValue = {
      ...option,
      value: relativeValue + runningTotal,
    };
    runningTotal += relativeValue;

    return cumulativeValue;
  });

  const randomNumber = Math.random();
  const result = cumulativeValues.find(({ value }) => randomNumber <= value);

  return result;
}

function run100times() {
  const results = [];
  for (let i = 0; i < 100; i++) {
    const randomHero = getRandomWeighted(heroes);
    results.push(randomHero.name);
  }

  // Counts the total occurencies
  const totalResults = results.reduce(
    (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
    {}
  );

  return totalResults;
}
