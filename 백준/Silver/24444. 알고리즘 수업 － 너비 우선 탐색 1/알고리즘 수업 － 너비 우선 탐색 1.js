class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    let item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

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

//bfs 로직
function bfs(graph, start, visited) {
  let queue = new Queue();
  queue.enqueue(start);
  visited[start] = count;

  while (queue.getLength() != 0) {
    let v = queue.dequeue();

    for (let i of graph[v]) {
      if (!visited[i]) {
        count++;
        queue.enqueue(i);
        visited[i] = count;
      }
    }
  }
}

bfs(graph, r, visited);

console.log(visited.slice(1).join("\n").trim());