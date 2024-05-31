const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const myMap = new Map();

const arr = [];

for (let i = 0; i < input.length; i++) {
  let x = input[i].split(".")[1];
  myMap.set(x, myMap.has(x) ? myMap.get(x) + 1 : 1);
}

console.log(
  [...myMap]
    .map((e) => e.join(" "))
    .sort()
    .join("\n")
    .trim()
);