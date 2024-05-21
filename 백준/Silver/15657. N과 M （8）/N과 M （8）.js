const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const visited = Array(N).fill(0);
const results = [];
const node = [];

const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const dfs = (start, depth) => {
  node.push(arr[start]);
  if (depth === M) {
    results.push(
      [...node].join(" ").trim()
    );
    node.pop();
    return;
  }
  for (let i = 0; i < N; i++) {
    if (arr[i] >= arr[start]) dfs(i, depth + 1);
  }
  node.pop();
};

for (let i = 0; i < N; i++) {
  dfs(i, 1);
  visited[i] = 1;
}

console.log(results.join("\n").trim());