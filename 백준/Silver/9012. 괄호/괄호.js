const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = +input.shift();

const result = [];

for (let i = 0; i < N; i++) {
  let answer = "NO";
  let stack = [];
  let isbreaked = false;

  for (let j = 0; j < input[i].length; j++) {
    if (!stack.length && input[i][j] === ")") {
      answer = "NO";
      isbreaked = true;
      break;
    }

    if (stack.length && input[i][j] === ")") {
      stack.pop();
    }

    if (input[i][j] === "(") {
      stack.push("(");
    }
  }

  if (!stack.length && !isbreaked) answer = "YES";

  result.push(answer);
}

console.log(result.join("\n").trim());