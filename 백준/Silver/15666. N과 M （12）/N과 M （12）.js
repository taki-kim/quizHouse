const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);
const results = new Set();
const node = [];
arr.sort((a, b) => a - b);

const dfs = (start, depth) => {
  node.push(arr[start]);
  if (depth == M) {
    results.add([...node].join(" ").trim());
  } else {
    for (let i = 0; i < N; i++) {
      if (arr[start] <= arr[i]) dfs(i, depth + 1);
      else continue;
    }
  }
  node.pop();
};

for (let i = 0; i < N; i++) {
  dfs(i, 1);
}

console.log([...results].join("\n").trim());