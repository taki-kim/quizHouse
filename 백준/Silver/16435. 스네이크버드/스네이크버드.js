const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let length = M;

input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .forEach((e) => {
    if (length >= e) {
      length++;
    }
  });

console.log(length);
