const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const N = Number(require("fs").readFileSync(filePath));

const memo = Array(N + 1).fill(0);
memo[1] = 0;
memo[2] = 1;
memo[3] = 1;

for (let i = 4; i <= N; i++) {
  memo[i] = memo[i - 1] + 1;
  if (i % 2 === 0 && i % 3 !== 0) {
    memo[i] = Math.min(memo[i / 2] + 1, memo[i]);
  } else if (i % 3 === 0 && i % 2 !== 0) {
    memo[i] = Math.min(memo[i / 3] + 1, memo[i]);
  } else if (i % 6 === 0) {
    memo[i] = Math.min(memo[i / 2] + 1, memo[i / 3] + 1, memo[i]);
  }
}

console.log(memo[N]);