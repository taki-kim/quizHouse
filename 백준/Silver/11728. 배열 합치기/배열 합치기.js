const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

input.shift();

let [A, B] = input;

A = A.split(" ").map(Number);
B = B.split(" ").map(Number);

const result = [...A, ...B]
  .sort((a, b) => a - b)
  .join(" ")
  .trim();

console.log(result);