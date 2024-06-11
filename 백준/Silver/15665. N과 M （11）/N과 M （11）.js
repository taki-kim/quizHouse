const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

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

const answer = new Set();
let node = [];

const dfs = (start, depth) => {
  node.push(arr[start]);
  if (depth === M) {
    answer.add([...node].join(" ").trim());
  } else {
    for (let i = 0; i < N; i++) {
      dfs(i, depth + 1);
    }
  }
  node.pop();
};

for (let i = 0; i < N; i++) {
  dfs(i, 1);
}

console.log([...answer].join("\n").trim());
