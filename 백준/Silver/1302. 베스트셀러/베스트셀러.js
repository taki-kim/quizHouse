const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const myMap = new Map();

for (let i = 0; i < N; i++) {
  if (myMap.has(input[i])) {
    myMap.set(input[i], myMap.get(input[i]) + 1);
  } else {
    myMap.set(input[i], 1);
  }
}

const newArr = [...myMap].sort().sort((a, b) => b[1] - a[1]);

console.log(newArr[0][0]);