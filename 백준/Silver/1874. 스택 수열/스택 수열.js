const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let stack = [];
let newStack = [];
let answer = [];
let x = 1;

for (let i = 1; i <= N; i++) {
  if (Number(input[i]) === stack[stack.length - 1]) {
    newStack.push(stack.pop());
    answer.push("-");
  } else {
    if (Number(input[i]) > stack[stack.length - 1] || stack.length === 0) {
      while (x <= Number(input[i])) {
        stack.push(x);
        answer.push("+");
        x++;
      }
      newStack.push(stack.pop());
      answer.push("-");
    }
  }
}

if (newStack.length == N) {
  console.log(answer.join("\n").trim());
} else {
  console.log("NO");
}
