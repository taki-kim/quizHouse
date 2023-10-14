const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let answer = [];

for (let i = 1; i <= n; i++) {
  let arr = input[i].split(" ").map((e) => Number(e));
  answer.push(arr);
}

answer.sort((a, b) => {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let result = "";

for (let i = 0; i < n; i++) {
  result += answer[i].join(" ") + "\n";
}

console.log(result);