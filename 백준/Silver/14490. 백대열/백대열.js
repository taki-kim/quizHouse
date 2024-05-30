const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [N, M] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(":")
  .map(Number);

let x = 0;
let maxNum = N >= M ? M : N;

for (let i = 1; i <= maxNum; i++) {
  if (M % i === 0 && N % i === 0) x = i;
}

console.log(`${N / x}:${M / x}`);