const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input[0];

let stack = [];
let answer = [];

for (let i = 1; i <= n; i++) {
  if (input[i] == 2) {
    if (stack.length) {
      const pop = stack.pop();
      answer.push(pop);
    } else {
      answer.push(-1);
    }
  } else if (input[i] == 3) {
    answer.push(stack.length);
  } else if (input[i] == 4) {
    if (stack.length) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  } else if (input[i] == 5) {
    if (stack.length) {
      answer.push(stack[stack.length - 1]);
    } else {
      answer.push(-1);
    }
  } else {
    let num = input[i].split(" ").map((e) => Number(e))[1];
    stack.push(num);
  }
}

console.log(answer.join("\n"));