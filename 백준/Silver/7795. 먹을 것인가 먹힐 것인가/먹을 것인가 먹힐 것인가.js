const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const result = [];

const N = +input.shift();

for (let i = 0; i < N; i++) {
  let count = 0;

  const [sizeA, sizeB] = input.shift().split(" ").map(Number);

  const A = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  const B = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  for (let a = 0; a < sizeA; a++) {
    for (let b = 0; b < sizeB; b++) {
      if (A[a] > B[b]) {
        count += sizeB - b;
        break;
      }
    }
  }

  result.push(count);
}

console.log(result.join("\n").trim());