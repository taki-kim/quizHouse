const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const graph = new Array(N + 1).fill().map(() => []);
const visited = new Array(N + 1).fill(0);

const result = new Array(N + 1).fill(0);

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const bfs = (start) => {
  const queue = [];
  visited[start] = 1;
  queue.push(start);

  while (queue.length) {
    const v = queue.shift();
    for (i of graph[v]) {
      if (!visited[i]) {
        result[i] = v;
        queue.push(i);
        visited[i] = 1;
      }
    }
  }
};

bfs(1);

console.log(result.slice(2).join("\n").trim());
