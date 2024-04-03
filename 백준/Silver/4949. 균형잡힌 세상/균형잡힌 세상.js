const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = [];

input.forEach((str) => {
  if (!str.split(".")[0].length) return;
  else {
    let stack = [];
    str.split("").forEach((chr) => {
      if ((chr === "(") | (chr === "[")) {
        stack.push(chr);
      } else if (chr === ")") {
        if (!stack.length) stack.push(chr);
        else if (stack.length && stack[stack.length - 1] === "(") stack.pop();
        else if (stack.length && stack[stack.length - 1] !== "(")
          stack.push(chr);
      } else if (chr === "]") {
        if (!stack.length) stack.push(chr);
        else if (stack.length && stack[stack.length - 1] === "[") stack.pop();
        else if (stack.length && stack[stack.length - 1] !== "[")
          stack.push(chr);
      }
    });

    if (!stack.length) {
      answer.push("yes");
    } else {
      answer.push("no");
    }
  }
});

console.log(answer.join("\n"));