const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let count = 0;
let stack = [];

for (let i = 1; i <= n; i++) {
  let str = input[i].split("");
  for (let j = 0; j < str.length; j++) {
    if (str[j] == "(") {
      stack.push("0");
      count++;
    } else {
      stack.pop();
      count--;
    }
  }

  if (!stack.length && count == 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  stack = [];
  count = 0;
}