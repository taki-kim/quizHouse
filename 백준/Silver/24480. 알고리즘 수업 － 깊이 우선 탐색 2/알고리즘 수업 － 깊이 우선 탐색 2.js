const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [n, m, node] = input[0].split(" ").map((e) => Number(e));
const visited = new Array(n).fill(0);
const graph = [...new Array(n + 1)].map(() => []);

let visitedNum = 1;

function dfs(node, graph, visited) {
  visited[node - 1] = visitedNum;
  visitedNum++;

  for (const i of graph[node]) {
    if (!visited[i - 1]) {
      dfs(i, graph, visited);
    }
  }
}

for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map((e) => Number(e));
  graph[x].push(y);
  graph[y].push(x);
}

graph.map((v) => v.sort((a, b) => b - a));

dfs(node, graph, visited);

console.log(visited.join("\n"));
