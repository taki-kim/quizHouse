const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const result = [];

for (let i = 0; i < N; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  result.push(`Case #${i + 1}: ${A} + ${B} = ${A + B}`);
}

console.log(result.join("\n").trim());