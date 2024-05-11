const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const results = [];

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  if (arr[0] * arr[0] + arr[1] * arr[1] === arr[2] * arr[2]) {
    results.push("right");
  } else {
    results.push("wrong");
  }
}

console.log(results.join("\n").trim());