const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map((e) => Number(e));

let newArr = new Set(arr);

newArr = [...newArr];
newArr.sort((a, b) => a - b);

let map = new Map();

for (let i = 0; i < newArr.length; i++) {
  map.set(newArr[i], i);
}

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += map.get(arr[i]) + " ";
}

console.log(answer.trim());