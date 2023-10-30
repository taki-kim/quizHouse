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
    const item = this.items[this.headIndex];
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

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const MAX = 100001;

let visited = new Array(MAX).fill(0);

function bfs() {
  let queue = new Queue();
  queue.enqueue(N);

  while (queue.length !== 0) {
    let cur = queue.dequeue();
    if (cur == K) {
      return visited[cur];
    }
    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (next < 0 || next >= MAX) continue;
      if (visited[next] == 0) {
        visited[next] = visited[cur] + 1;
        queue.enqueue(next);
      }
    }
  }
}

console.log(bfs());
