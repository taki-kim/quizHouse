const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let farm = require("fs").readFileSync(filePath).toString().split("\n");

const [R, C] = farm.shift().split(" ").map(Number);
const visited = Array.from(Array(C), () => Array(R).fill(0));

farm = farm.map((e) => e.split(" ").map(Number));

let day = 0;

const ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const queue = new Queue();
let count = R * C;

const bfs = (queue) => {
  while (queue.getLength()) {
    const [curC, curR] = queue.dequeue();
    count--;
    for (let i = 0; i < 4; i++) {
      const newC = curC + ds[i][0];
      const newR = curR + ds[i][1];

      if (
        newC >= 0 &&
        newC < C &&
        newR >= 0 &&
        newR < R &&
        farm[newC][newR] == 0 &&
        visited[newC][newR] == 0
      ) {
        visited[newC][newR] = visited[curC][curR] + 1;
        if (day <= visited[curC][curR] + 1) day = visited[curC][curR] + 1; // 날짜 계산
        farm[newC][newR] = 2;
        queue.enqueue([newC, newR]);
      }
    }
  }
};

for (let c = 0; c < C; c++) {
  for (let r = 0; r < R; r++) {
    if (farm[c][r] === 1 && visited[c][r] == 0) {
      queue.enqueue([c, r]);
    }
    if (farm[c][r] === -1) count--;
  }
}

bfs(queue);

console.log(!count ? day : -1);