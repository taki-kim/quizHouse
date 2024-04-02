const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  getLength() {
    return this.tail - this.head;
  }
}

const [N, M, V] = input.shift().split(" ").map(Number);
const graph = [...new Array(N + 1)].map(() => []);

for (let i = 0; i < M; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

graph.forEach((i) => i.sort((a, b) => a - b));

let dfsVisited = new Array(N + 1).fill(0);
let bfsVisited = new Array(N + 1).fill(0);

let resultD = [];
let resultB = [];

const dfs = (v, depth) => {
  dfsVisited[v] = depth;
  resultD.push(v);
  for (i of graph[v]) {
    if (!dfsVisited[i]) {
      dfs(i, depth + 1);
    }
  }
};

const bfs = (v) => {
  const queue = new Queue();
  queue.enqueue(v);
  let count = 1;
  bfsVisited[v] = count;

  while (queue.getLength()) {
    let x = queue.dequeue();
    resultB.push(x);
    for (i of graph[x]) {
      if (!bfsVisited[i]) {
        queue.enqueue(i);
        count++;
        bfsVisited[i] = count;
      }
    }
  }
};

dfs(V, 1);
bfs(V);

console.log(resultD.join(" "));
console.log(resultB.join(" "));
