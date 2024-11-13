const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString();

const stack = [];
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push("(");
  }
  if (stack.length && input[i] === ")") {
    if (input[i - 1] === ")") {
      stack.pop();
      count++;
    } else {
      stack.pop();
      count += stack.length;
    }
  }
}

console.log(count);
