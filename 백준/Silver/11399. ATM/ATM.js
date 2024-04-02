const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input.shift());
const people = input[0].split(" ").map(Number);
let arr = [];
let count = 0;
let result = 0;

people.sort((a, b) => a - b);

people.forEach((item, i) => {
  count += item;
  arr.push(count);
});

arr.forEach((e) => {
  result += e;
});

console.log(result);