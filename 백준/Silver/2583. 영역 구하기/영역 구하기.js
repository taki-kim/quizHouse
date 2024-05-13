const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, K, M] = input.shift().split(" ").map(Number);

const paper = Array.from(Array(N), () => Array(K).fill(0));

for (let i = 0; i < M; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      paper[y][x] = 1;
    }
  }
}

let squares = 0;
let widths = [];

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]; //상하좌우

const bfs = (x, y) => {
  paper[x][y] = 1;
  const queue = [[x, y]];
  let width = 1;
  squares++;

  while (queue.length) {
    const [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newX = curX + directions[i][0];
      const newY = curY + directions[i][1];
      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < K &&
        paper[newX][newY] == 0
      ) {
        queue.push([newX, newY]);
        paper[newX][newY] = 1;
        width++;
      }
    }
  }

  widths.push(width);
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    if (paper[i][j] != 1) {
      bfs(i, j);
    } else continue;
  }
}

console.log(squares);
console.log(widths.sort((a, b) => a - b).join(" "));