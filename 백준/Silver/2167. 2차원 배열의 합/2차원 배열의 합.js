const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const element = input.shift().split(" ").map(Number);
  arr.push(element);
}

const K = +input.shift();

for (let i = 0; i < K; i++) {
  let [curX, curY, endX, endY] = input[i].split(" ").map(Number);

  curX--;
  curY--;
  endX--;
  endY--;

  let sum = 0;

  for (let y = curY; y <= endY; y++) {
    for (let x = curX; x <= endX; x++) {
      sum += arr[x][y];
    }
  }

  answer.push(sum);
}

console.log(answer.join("\n").trim());
