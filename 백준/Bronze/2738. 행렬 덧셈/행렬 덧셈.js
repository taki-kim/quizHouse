const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((e) => Number(e));
let count = 0;
let A = [];
let B = [];
let res = "";

for (let i = 1; i <= N * 2; i++) {
  let items = input[i].split(" ").map((e) => Number(e));
  if (i <= N) {
    A.push(items);
  } else {
    B.push(items);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    res += A[i][j] + B[i][j] + " ";
  }
  res += "\n";
}

console.log(res.trim());
