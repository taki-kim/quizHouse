const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = +input.shift();
const M = +input.shift();

const sort = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (M - sort[i] === sort[j]) answer++;
  }
}

console.log(answer);
