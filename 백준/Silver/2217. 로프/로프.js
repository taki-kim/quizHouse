const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = +input.shift();

let weights = [];

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  weights.push(input[i] * (input.length - i));
}

console.log(Math.max(...weights));