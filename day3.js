const input = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

// const input = document
//   .getElementsByTagName("pre")[0]
//   .innerText.split("\n")
//   .filter((line) => !!line);

const res = input
  .map((str) => [...str].map((char) => parseInt(char)))
  .reduce((acc, curr) => acc.map((value, index) => curr[index] + value));

const gammaRate = parseInt(
  res
    .map((character) => (character > input.length / 2 ? 1 : 0))
    .reduce((acc, curr) => `${acc}${curr}`),
  2
);
const epsilonRate = parseInt(
  res
    .map((character) => (character <= input.length / 2 ? 1 : 0))
    .reduce((acc, curr) => `${acc}${curr}`),
  2
);

console.log("Day3 - Part1", epsilonRate * gammaRate);

const mostCommon = res.map((character) =>
  character <= input.length / 2 ? 1 : 0
);

console.log(mostCommon);
