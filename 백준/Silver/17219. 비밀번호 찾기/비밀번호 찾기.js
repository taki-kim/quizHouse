const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((e) => Number(e));
let memo = new Map();
let answer = "";

for (let i = 1; i <= N; i++) {
  const item = input[i].split(" ");
  memo.set(item[0], item[1]);
}

for (let i = N + 1; i <= input.length + M; i++) {
  if (memo.get(input[i])) {
    answer += memo.get(input[i]) + "\n";
  }
}

console.log(answer.trim());