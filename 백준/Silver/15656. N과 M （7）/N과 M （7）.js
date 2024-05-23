const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const results = [];
let node = [];

const sol = (start, depth) => {
  node.push(arr[start]);
  if (depth === M) {
    results.push([...node].join(" ").trim());
  } else {
    for (let i = 0; i < N; i++) {
      sol(i, depth + 1);
    }
  }
  node.pop();
};

for (let i = 0; i < N; i++) {
  sol(i, 1);
}

console.log(results.join("\n").trim());