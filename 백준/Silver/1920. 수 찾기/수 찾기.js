const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const arrN = input.shift().split(" ").map(Number);
const M = Number(input.shift());
const arrM = input.shift().split(" ").map(Number);

const mySet = new Set([...arrN]);
let result = [];
arrM.forEach((e) => {
  if (mySet.has(e)) {
    result.push(1);
  } else {
    result.push(0);
  }
});

console.log(result.join("\n"));