const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = +input.shift();
let count = 0;

for (let i = 0; i < N; i++) {
  const stack = [];

  for (let j = 0; j < input[i].length; j++) {
    let stackT = stack[stack.length - 1];
    if (!stack.length) {
      stack.push(input[i][j]);
    } else {
      if (stackT === input[i][j]) {
        stack.pop();
      } else if (stackT !== input[i][j]) {
        stack.push(input[i][j]);
      }
    }
  }
  if (!stack.length) {
    count++;
  }
}

console.log(count);