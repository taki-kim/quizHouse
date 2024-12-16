const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let maxSqaure = 1;

const isSquare = (n, m, length) => {
  const start = input[n][m];

  if (n + length < N && m + length < M) {
    if (
      start == input[n + length][m] &&
      start == input[n + length][m + length]
    ) {
      newMax = (length + 1) ** 2;
      maxSqaure = newMax > maxSqaure ? newMax : maxSqaure;
    }
  }
};

for (let n = 0; n < N; n++) {
  for (let m = 0; m < M - 1; m++) {
    for (let m2 = m + 1; m2 < M; m2++) {
      if (input[n][m] == input[n][m2]) {
        isSquare(n, m, m2 - m);
      }
    }
  }
}

console.log(maxSqaure);
