const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [str, n] = input;

console.log(str[n - 1]);