const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = Number(input.shift());

const dp = new Array(11).fill(0);

const result = [];

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

const sol = (num) => {
  if (dp[num]) return dp[num];
  else {
    dp[num] = sol(num - 1) + sol(num - 2) + sol(num - 3);
    return dp[num];
  }
};

for (let i = 0; i < T; i++) {
  result.push(sol(input[i]));
}

console.log(result.join("\n").trim());