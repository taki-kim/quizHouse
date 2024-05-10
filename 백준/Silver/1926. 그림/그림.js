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
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let paper = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = paper.shift().split(" ").map(Number);

paper = paper.map((e) => e.split(" ").map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(false));
const directions = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
]; // 인접한 좌표의 상하좌우 x,y좌표 설정

let widths = [];

const bfsSol = (x, y) => {
  let queue = new Queue();
  queue.enqueue([x, y]);
  let width = 1;

  while (queue.getLength() > 0) {
    const [curX, curY] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const newX = curX + directions[i][0];
      const newY = curY + directions[i][1];

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < N &&
        newY < M &&
        !visited[newX][newY] &&
        paper[newX][newY] == 1
      ) {
        visited[newX][newY] = true;
        width++;
        queue.enqueue([newX, newY]);
      }
    }
  }

  widths.push(width);
};

paper.forEach((e1, i1) => {
  e1.forEach((e2, i2) => {
    if (paper[i1][i2] && !visited[i1][i2]) {
      visited[i1][i2] = true;
      bfsSol(i1, i2);
    }
  });
});

widths.sort((a, b) => b - a);
const drawings = widths.length;
console.log(drawings);
console.log(drawings > 0 ? widths[0] : 0);