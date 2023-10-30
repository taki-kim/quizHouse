const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
const N = Number(input[0]);
const linked = Number(input[1]);

let graph = [];
for (let i = 0; i < N + 1; i++) {
  graph.push(new Array());
}

let visited = Array(N).fill(false);

for (let i = 2; i < linked + 2; i++) {
  let pair = input[i].split(" ").map((e) => Number(e));
  let [x, y] = pair;
  graph[x].push(y);
  graph[y]?.push(x);
}

function dfs(graph, node, visited) {
  visited[node] = true;
  answer++;

  for (i of graph[node]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);

console.log(answer - 1);