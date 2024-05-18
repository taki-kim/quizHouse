const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [col, row] = input.shift().split(" ").map(Number);

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
  size() {
    return this.tail - this.head;
  }
}

const ds = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const map = input.map((e) => e.split(" ").map(Number));
const visited = Array.from(Array(col), () => Array(row).fill(0));

const bfs = (c, r) => {
  const myQueue = new Queue();
  myQueue.enqueue([c, r]);

  while (myQueue.size()) {
    const [curC, curR] = myQueue.dequeue();
    for (let i = 0; i < 4; i++) {
      const newC = curC + ds[i][0];
      const newR = curR + ds[i][1];

      if (
        newC >= 0 &&
        newC < col &&
        newR >= 0 &&
        newR < row &&
        !visited[newC][newR] &&
        map[newC][newR] == 1
      ) {
        myQueue.enqueue([newC, newR]);
        visited[newC][newR] = visited[curC][curR] + 1;
      }
    }
  }

  visited[c][r] = 0;
};

for (let c = 0; c < col; c++) {
  let break01 = 0;
  for (let r = 0; r < row; r++) {
    if (map[c][r] == 2) {
      bfs(c, r);
      break01 = 1;
      break;
    }
  }
  if (break01) break;
}

for (let c = 0; c < col; c++) {
  for (let r = 0; r < row; r++) {
    if (map[c][r] !== 2) {
      if (map[c][r] == 1 && !visited[c][r]) {
        visited[c][r] = -1;
      }
    }
  }
}

console.log(
  visited
    .map((e) => e.join(" ").trim())
    .join("\n")
    .trim()
);