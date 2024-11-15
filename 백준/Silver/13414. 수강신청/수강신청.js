const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [K, L] = input.shift().split(" ").map(Number);

const myMap = new Map();

for (let i = 0; i < L; i++) {
  if (myMap.has(input[i])) {
    myMap.delete(input[i]);
    myMap.set(input[i], i + 1);
  } else if (!myMap.has(input[i])) {
    myMap.set(input[i], i + 1);
  }
}

console.log(
  [...myMap]
    .sort((a, b) => a[1] - b[1])
    .map((x) => x[0])
    .splice(0, K)
    .join("\n")
    .trim()
);
