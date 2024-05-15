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

let board = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = Number(board.shift());

board = board.map((e) => e.split(""));

const visited01 = Array.from(Array(N), () => Array(N).fill(null));
const visited02 = Array.from(Array(N), () => Array(N).fill(null));
const ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const bfs1 = (col, row, color) => {
  const queue01 = new Queue();
  queue01.enqueue([col, row]);
  visited01[col][row] = color;

  while (queue01.getLength()) {
    const [curC, curR] = queue01.dequeue();
    for (let i = 0; i < 4; i++) {
      const newC = curC + ds[i][0];
      const newR = curR + ds[i][1];

      if (
        newC >= 0 &&
        newC < N &&
        newR >= 0 &&
        newR < N &&
        !visited01[newC][newR] &&
        board[newC][newR] === color
      ) {
        visited01[newC][newR] = color;
        queue01.enqueue([newC, newR]);
      }
    }
  }
};

const bfs2 = (col, row, color) => {
  const queue02 = new Queue();
  queue02.enqueue([col, row]);
  visited02[col][row] = color;

  while (queue02.getLength()) {
    const [curC, curR] = queue02.dequeue();
    for (let i = 0; i < 4; i++) {
      const newC = curC + ds[i][0];
      const newR = curR + ds[i][1];
      if (
        newC >= 0 &&
        newC < N &&
        newR >= 0 &&
        newR < N &&
        !visited02[newC][newR] &&
        board[newC][newR] !== "B"
      ) {
        visited02[newC][newR] = "X";
        queue02.enqueue([newC, newR]);
      }
    }
  }
};

const bfs3 = (col, row, color) => {
  const queue02 = new Queue();
  queue02.enqueue([col, row]);
  visited02[col][row] = color;

  while (queue02.getLength()) {
    const [curC, curR] = queue02.dequeue();
    for (let i = 0; i < 4; i++) {
      const newC = curC + ds[i][0];
      const newR = curR + ds[i][1];
      if (
        newC >= 0 &&
        newC < N &&
        newR >= 0 &&
        newR < N &&
        !visited02[newC][newR] &&
        board[newC][newR] === color
      ) {
        visited02[newC][newR] = color;
        queue02.enqueue([newC, newR]);
      }
    }
  }
};

let count01 = 0;
let count02 = 0;

for (let c = 0; c < N; c++) {
  for (let r = 0; r < N; r++) {
    if (visited01[c][r] == null) {
      bfs1(c, r, board[c][r]);
      count01++;
    }
    if (
      visited02[c][r] == null &&
      (board[c][r] === "R" || board[c][r] === "G")
    ) {
      bfs2(c, r, "X");
      count02++;
    } else if (visited02[c][r] == null && board[c][r] === "B") {
      bfs3(c, r, board[c][r]);
      count02++;
    }
  }
}

console.log(count01, count02);