const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const A = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const B = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;

for (let i = 0; i < N; i++) {
  result += A[i] * B[i];
}

console.log(result);