const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = input[0];

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const waitings = [];

arr.forEach((e, i) => {
  if (i === 0) waitings.push(e);
  else waitings.push(e + waitings[i - 1]);
});

console.log(
  waitings.reduce((acc, cur) => {
    return acc + cur;
  })
);