const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const bfs = (start) => {
  let queue = [];
  queue.push(start);

  visited[start] = 1;

  while (queue.length) {
    let v = queue.shift();

    for (i of myGraph[v]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = 1;
        count++;
      }
    }
  }
};

const N = +input.shift();
const M = +input.shift();

let count = 0;

const visited = Array(N + 1).fill(0);
let myGraph = [];

for (let i = 0; i < N + 1; i++) {
  myGraph.push(new Array());
}

for (let i = 0; i < M; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  myGraph[x].push(y);
  myGraph[y].push(x);
}

bfs(1);

console.log(count);