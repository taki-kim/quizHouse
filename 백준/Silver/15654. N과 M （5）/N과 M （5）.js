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
  visited[start] = 1;
  node.push(arr[start]);

  if (depth == M) {
    results.push(node.join(" "));
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] == 1) continue;
    if (!visited[i]) {
      dfs(i, depth + 1);
    }
  }
  visited[start] = 0;
  node.pop();
};

for (let i = 0; i < arr.length; i++) {
  dfs(i, 1);
}

console.log(results.join("\n").trim());