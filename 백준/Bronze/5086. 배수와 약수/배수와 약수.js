const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = 0;
let arr = [];
let answer = "";

do {
  let row = input[n].split(" ").map((e) => Number(e));
  arr.push(row);
  n++;
} while (input[n] !== "0 0");

for (let i = 0; i < n; i++) {
  let isMultiple = arr[i][0] % arr[i][1];
  let isFactor = arr[i][1] % arr[i][0];
  if (isMultiple === 0) {
    answer += "multiple" + "\n";
  } else if (isFactor === 0) {
    answer += "factor" + "\n";
  } else {
    answer += "neither" + "\n";
  }
}

console.log(answer.trim());