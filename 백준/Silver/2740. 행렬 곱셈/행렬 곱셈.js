const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const A = [];
const B = [];
const result = [];

const [N, M] = input.shift().split(" ").map(Number);

for (let n = 0; n < N; n++) {
  A.push(input[n].split(" ").map(Number));
}

const K = input[N].split(" ").map(Number)[1];

for (let m = N + 1; m < input.length; m++) {
  B.push(input[m].split(" ").map(Number));
}

for (let n = 0; n < N; n++) {
  let element = [];
  for (let k = 0; k < K; k++) {
    let sum = 0;
    for (let m = 0; m < M; m++) {
      sum += A[n][m] * B[m][k];
    }
    element.push(sum);
  }
  result.push(element.join(" "));
}

console.log(result.join("\n"));