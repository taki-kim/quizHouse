const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const scores = input.shift().split(" ").map(Number);
const M = Math.max(...scores);
const newScores = [];

for (let i = 0; i < N; i++) {
  const newScore = Number(((scores[i] / M) * 100).toFixed(2));
  newScores.push(newScore);
}

console.log(newScores.reduce((acc, cur) => acc + cur, 0) / N);
