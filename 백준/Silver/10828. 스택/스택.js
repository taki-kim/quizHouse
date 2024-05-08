const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

let stack = [];
let result = [];

const getResult = (x) => {
  let str = x.split(" ");
  switch (str[0]) {
    case "push":
      stack.push(Number(str[1]));
      break;
    case "top":
      if (stack.length !== 0) result.push(stack[stack.length - 1]);
      else if (stack.length === 0) result.push(-1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      if (stack.length !== 0) result.push(0);
      else if (stack.length === 0) result.push(1);
      break;
    case "pop":
      if (stack.length !== 0) result.push(stack.pop());
      else if (stack.length === 0) result.push(-1);
      break;
  }
};

for (let i = 0; i < N; i++) {
  getResult(input[i]);
}

console.log(result.join("\n").trim());