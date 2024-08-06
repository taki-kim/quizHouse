const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

let arr = input.sort();

let mySet = new Set();

for (let i = 0; i < arr.length; i++) {
  const str = [...arr[i]].sort().join("");
  mySet.add(str);
}

console.log([...mySet].length);