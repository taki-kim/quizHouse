const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = 0;
const N = Number(input.shift());
input[0]
  .split("")
  .map(Number)
  .forEach((e) => {
    answer += e;
  });

console.log(answer);
