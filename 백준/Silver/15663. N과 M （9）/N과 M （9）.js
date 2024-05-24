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
const answer = new Set();
let visited = Array(N).fill(0);
let node = [];

const dfs = (start, depth) => {
  node.push(arr[start]);
  visited[start] = 1;
  if (depth === M) {
    answer.add([...node].join(" ").trim());
  } else {
    for (let i = 0; i < N; i++) {
      if (visited[i] === 0) {
        dfs(i, depth + 1);
      }
    }
  }
  node.pop();
  visited[start] = 0;
};

for (let i = 0; i < N; i++) {
  dfs(i, 1);
}

console.log([...answer].join("\n").trim());