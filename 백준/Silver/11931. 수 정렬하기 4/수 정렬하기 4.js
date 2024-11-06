const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = input.shift();
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(+input[i]);
}

console.log(arr.sort((a, b) => b - a).join("\n"));
