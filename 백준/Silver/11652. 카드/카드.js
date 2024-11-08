const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input.shift());

input = input
  .map((n) => BigInt(n))
  .sort((a, b) => {
    if (a < b) return -1;
  });

const myMap = new Map();
let curNum = input[0];

for (let i = 0; i < N; i++) {
  if (input[i] === curNum) {
    if (myMap.has(curNum)) myMap.set(curNum, myMap.get(curNum) + 1);
    else myMap.set(curNum, 1);
  } else if (input[i] > curNum) {
    curNum = input[i];
    myMap.set(curNum, 1);
  }
}

console.log([...myMap].sort((a, b) => b[1] - a[1])[0][0].toString());
