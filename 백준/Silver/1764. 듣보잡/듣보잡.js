const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift().split(" ")[0]);

let result = [];

const mySet = new Set(input.slice(0, N));
const arr = input.slice(N);

arr.forEach((e) => {
  if (mySet.has(e)) {
    result.push(e);
  }
});

result.sort();
console.log(result.length);
console.log(result.join("\n"));