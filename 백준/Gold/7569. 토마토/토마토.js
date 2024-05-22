const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((value) => Number(value)));

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
    const removed = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return removed;
  }
  size() {
    return this.tail - this.head;
  }
}

let [ROW, COL, Z] = input.shift();

let ds = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

let box = [];
let days = 0; // 방문이 이루어질때 갱신
let count = Z * COL * ROW; // 안익은 토마토 세기 (감산으로 계산)

// 토마토 상자를 3차원 배열로 변환
for (let i = 0; i < input.length; i += COL) {
  box.push(input.slice(i, COL + i));
}

const visited = Array.from(Array(Z), () =>
  Array.from(Array(COL), () => Array(ROW).fill(0))
);

const myQueue = new Queue();

const bfs = (myQueue) => {
  while (myQueue.size()) {
    const [curZ, curC, curR] = myQueue.dequeue();
    for (let i = 0; i < ds.length; i++) {
      const newZ = curZ + ds[i][0];
      const newC = curC + ds[i][1];
      const newR = curR + ds[i][2];

      if (
        newZ >= 0 &&
        newZ < Z &&
        newC >= 0 &&
        newC < COL &&
        newR >= 0 &&
        newR < ROW &&
        visited[newZ][newC][newR] == 0 &&
        box[newZ][newC][newR] == 0
      ) {
        count--; // 익은 토마토 빼주기
        box[newZ][newC][newR] = 1; // 토마토처리
        visited[newZ][newC][newR] = visited[curZ][curC][curR] + 1; // 방문처리
        days < visited[newZ][newC][newR] - 1
          ? (days = visited[newZ][newC][newR] - 1)
          : null; // 날짜 갱신
        myQueue.enqueue([newZ, newC, newR]);
      }
    }
  }
};

for (let z = 0; z < Z; z++) {
  for (let c = 0; c < COL; c++) {
    for (let r = 0; r < ROW; r++) {
      if (box[z][c][r] == 1) {
        myQueue.enqueue([z, c, r]);
        count--;
        visited[z][c][r] = 1;
      } else if (box[z][c][r] == -1) {
        count--;
      }
    }
  }
}

bfs(myQueue);

console.log(count ? -1 : days);