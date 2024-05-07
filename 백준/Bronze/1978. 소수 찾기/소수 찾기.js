const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const numbers = input[0].split(" ").map(Number);
let result = 0;

for (let i = 0; i < N; i++) {
  let targetNum = numbers[i];
  let count = 0;
  for (j = 1; j <= targetNum; j++) {
    if (targetNum % j === 0) count++;
  }
  if (count === 2) result++;
}

console.log(result);