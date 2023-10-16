const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

const n = input[0];
let stack = [];

for (let i = 1; i <= n; i++) {
  if (input[i]) {
    stack.push(input[i]);
  } else {
    let pop = stack.pop();
  }
}

let answer = 0;

if (stack.length) {
  stack.forEach((e) => (answer += e));
}

console.log(answer);
