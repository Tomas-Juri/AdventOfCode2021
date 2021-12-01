// const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const input = document
  .getElementsByTagName("pre")[0]
  .innerText.split("\n")
  .map((line) => +line);

let partOneResult = 0;

for (let index = 0; index < input.length - 1; index++) {
  const current = input[index];
  const next = input[index + 1];
  partOneResult += current > next ? 0 : 1;
}

console.log("Day1 - Part1", partOneResult);

let partTwoResult = 0;

for (let index = 0; index < input.length - 3; index++) {
  const currentGroup = input.slice(index, index + 3).reduce((a, b) => a + b);
  const nextGroup = input.slice(index + 1, index + 4).reduce((a, b) => a + b);
  partTwoResult += currentGroup >= nextGroup ? 0 : 1;
}

console.log("Day1 - Part2", partTwoResult);
