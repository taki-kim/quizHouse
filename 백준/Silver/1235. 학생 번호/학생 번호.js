const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const mySet = new Set();

const stringLength = input[0].length;

let minNum = stringLength;

for (let i = 1; i < stringLength; i++) {
  for (let j = 0; j < N; j++) {
    let num = input[j].slice(i, stringLength);
    mySet.add(num);
  }
  if (mySet.size === N) {
    minNum--;
  }
  mySet.clear();
}

console.log(minNum);
