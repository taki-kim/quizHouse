const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const [x, y] = input.shift().split(" ").map(Number);

const M = +input.shift();

const myGraph = new Array(N + 1).fill().map(() => []);
const visited = new Array(N + 1).fill(-1);

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  myGraph[a].push(b);
  myGraph[b].push(a);
}

const bfs = (start) => {
  const queue = [];
  queue.push(start);
  visited[start] = 0;

  while (queue.length) {
    const curNode = queue.shift();
    for (i of myGraph[curNode]) {
      if (visited[i] === -1) {
        queue.push(i);
        visited[i] = visited[curNode] + 1;
      }
    }
  }
};

bfs(x);

console.log(visited[y]);