const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const [X, Y] = input.shift().split(" ").map(Number);
const M = Number(input.shift());

const graph = [...new Array(N + 1)].map(() => []);
const visited = new Array(N + 1).fill(false);

let isRelated = false;
let degree = 0;

const dfs = (node, depth) => {
  visited[node] = true;

  if (node === Y) {
    isRelated = true;
    degree = depth;
  }

  for (i of graph[node]) {
    if (!visited[i]) {
      dfs(i, depth + 1);
    }
  }
};

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  graph[A].push(B);
  graph[B].push(A);
}

dfs(X, degree);

if (isRelated) {
  console.log(degree);
} else {
  console.log(-1);
}