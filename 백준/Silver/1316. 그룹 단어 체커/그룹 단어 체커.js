const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let count = N;
let recentWord = "";
let mySet = new Set();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < input[i].length; j++) {
    let cur = input[i][j];
    if (j !== 0 && mySet.has(cur) && recentWord !== cur) {
      count--;
      break;
    }
    mySet.add(cur);
    recentWord = cur;
  }
  mySet.clear();
}

console.log(count);