const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
let graph = Array.from(new Array(n + 1), () => new Array());
let visited = Array(n + 1).fill(0);
let count = 1;

// 그래프 생성
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

// 그래프 오름차순 정렬
graph.forEach((x) => x.sort((a, b) => a - b));

//dfs 로직

function dfs(start) {
  visited[start] = count;
  for (i of graph[start]) {
    if (visited[i] == 0) {
      count++;
      dfs(i);
    }
  }
}

dfs(r);

console.log(visited.slice(1).join("\n").trim());