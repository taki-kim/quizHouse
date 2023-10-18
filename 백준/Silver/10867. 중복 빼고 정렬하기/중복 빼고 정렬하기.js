const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map((e) => Number(e));
arr.sort((a, b) => a - b);
arr = new Set(arr);

let answer = "";

arr.forEach((e) => {
  answer += e + " ";
});
console.log(answer.trim());