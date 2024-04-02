const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let mySet = new Set();

for (let i = 0; i < N; i++) {
  let info = input[i].split(" ");
  if (info[1] === "enter") {
    mySet.add(info[0]);
  } else if (info[1] === "leave") {
    mySet.delete(info[0]);
  }
}

const result = [...mySet].sort().reverse().join("\n");
console.log(result);