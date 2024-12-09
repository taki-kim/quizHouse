const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const times = input[0].split(" ").map(Number);

let Y = [];
let M = [];

for (let i = 0; i < N; i++) {
  let time = times[i];
  let YCost = 1;
  let MCost = 1;

  YCost += parseInt(time / 30);
  MCost += parseInt(time / 60);

  Y.push(YCost * 10);
  M.push(MCost * 15);
}

Y = Y.reduce((acc, cur) => {
  return acc + cur;
}, 0);

M = M.reduce((acc, cur) => {
  return acc + cur;
}, 0);

if (Y < M) {
  console.log(`Y ${Y}`);
} else if (Y > M) {
  console.log(`M ${M}`);
} else if (Y === M) {
  console.log(`Y M ${Y}`);
}