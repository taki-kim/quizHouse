const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = [];
const [n] = input;

for (let i = 1; i <= n; i++) {
  answer.push(Number(input[i]));
}

answer.sort((a, b) => a - b);

console.log(answer.join("\n"));