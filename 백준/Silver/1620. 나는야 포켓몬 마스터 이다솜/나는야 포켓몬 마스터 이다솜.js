const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const pL = new Map();
const pLR = new Map();

for (let i = 0; i < N; i++) {
  pL.set(input[i], i + 1);
  pLR.set(i + 1, input[i]);
}

let answer = "";

for (let i = input.length - M; i < input.length; i++) {
  if (+input[i]) {
    answer += pLR.get(+input[i]) + "\n";
  } else {
    answer += pL.get(input[i]).toString() + "\n";
  }
}

console.log(answer.trim());