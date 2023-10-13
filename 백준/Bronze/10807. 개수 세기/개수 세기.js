const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [num, arr, value] = input;

const result = arr.split(" ").filter((e) => e == value).length;

console.log(result);