const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

const N = input.shift();

let count = 0;

for (let i = N - 2; i >= 0; i--) {
  while (input[i + 1] <= input[i]) {
    input[i] = input[i] - 1;
    count++;
  }
}

console.log(count);