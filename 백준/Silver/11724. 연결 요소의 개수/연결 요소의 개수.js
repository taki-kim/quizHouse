const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const visited = new Array(N + 1).fill(0);
const myGraph = new Array(N + 1).fill().map(() => []);

let attempt = 0;

const bfs = (start, attempt) => {
  const queue = [];
  queue.push(start);
  visited[start] = attempt;

  while (queue.length) {
    const v = queue.shift();

    for (i of myGraph[v]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = attempt;
      }
    }
  }
};

for (let i = 0; i < M; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  myGraph[x].push(y);
  myGraph[y].push(x);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    attempt++;
    bfs(i, attempt);
  } else continue;
}

console.log(attempt);
