const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);
const graph = [...new Array(N + 1)].map(() => []);
const visited = new Array(N + 1).fill(0);
let count = 1;
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

for (let i = 0; i < M; i++) {
  const [X, Y] = input[i].split(" ").map(Number);
  graph[X].push(Y);
  graph[Y].push(X);
}

graph.map((e) => e.sort((a, b) => b - a));

const bfs = (start) => {
  const queue = new Queue();
  queue.enqueue(start);
  visited[start] = count;

  while (queue.getLength()) {
    const v = queue.dequeue();
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        count++;
        visited[i] = count;
      }
    }
  }
};

bfs(R);

console.log(visited.slice(1).join("\n"));
