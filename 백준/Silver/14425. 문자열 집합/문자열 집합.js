const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = 0;

const [N, M] = input.shift().split(" ").map(Number);
const S = new Map();
for (let i = 0; i < N; i++) {
  S.set(input.shift(), true);
}

for (let i = 0; i < M; i++) {
  let str = input.shift();
  if (S.get(str)) answer++;
}

console.log(answer);
