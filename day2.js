// const input = [
//   "forward 5",
//   "down 5",
//   "forward 8",
//   "up 3",
//   "down 8",
//   "forward 2",
// ].map((item) => ({
//   direction: item.split(" ")[0],
//   value: +item.split(" ")[1],
// }));

const input = document
  .getElementsByTagName("pre")[0]
  .innerText.split("\n")
  .map((item) => ({
    direction: item.split(" ")[0],
    value: +item.split(" ")[1],
  }));

let depth = 0;
let position = 0;

for (let index = 0; index < input.length; index++) {
  const { direction, value } = input[index];

  depth += direction === "down" ? value : 0;
  depth -= direction === "up" ? value : 0;
  position += direction === "forward" ? value : 0;
}

console.log("Day2 - Part1", depth * position);

depth = 0;
position = 0;
let aim = 0;

for (let index = 0; index < input.length; index++) {
  const { direction, value } = input[index];

  aim += direction === "down" ? value : 0;
  aim -= direction === "up" ? value : 0;
  position += direction === "forward" ? value : 0;
  depth += direction === "forward" ? value * aim : 0;
}

console.log("Day2 - Part2", depth * position);
