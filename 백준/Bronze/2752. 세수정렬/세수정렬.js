const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number(e))
  .sort((a, b) => a - b);

console.log(input.join(" "));