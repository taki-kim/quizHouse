const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [ANum, BNum] = input.shift().split(" ").map(Number);

let A = input[0].split(" ").map(Number);
let B = input[1].split(" ").map(Number);

A = new Set(A);
B = new Set(B);

let answer = 0;

A.forEach((e) => {
  if (!B.has(e)) answer++;
});

B.forEach((e) => {
  if (!A.has(e)) answer++;
});

console.log(answer);
