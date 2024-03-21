const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M, R] = input.shift().split(" ").map(Number);
let graph = [...new Array(N + 1)].map(() => []);
let visited = new Array(N + 1).fill(0);
let count = 0;

for (let i = 0; i < M; i++) {
  const [X, Y] = input[i].split(" ").map(Number);
  graph[X].push(Y);
  graph[Y].push(X);
}

graph.map((arr) => arr.sort((a, b) => a - b));

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
  peek() {
    return this.items[this.head];
  }
  getLength() {
    return this.tail - this.head;
  }
}

const bfs = (start) => {
  const queue = new Queue();
  queue.enqueue(start);
  count++;

  visited[start] = count;

  while (queue.getLength()) {
    let v = queue.dequeue();

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

console.log(visited.slice(1).join("\n").trim());
