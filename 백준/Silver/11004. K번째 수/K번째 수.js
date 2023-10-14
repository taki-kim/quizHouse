const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ");
const arr = input[1].split(" ").map((e) => Number(e));

arr.sort((a, b) => a - b);

console.log(arr[Number(k) - 1]);
