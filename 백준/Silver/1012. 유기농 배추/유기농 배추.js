const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const wormPoints = [];

const bfs = (row, col, farm, maxRow, maxCol) => {
  let queue = [[row, col]];
  farm[col][row] = 2;

  while (queue.length) {
    const [curR, curC] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newR = curR + directions[i][0];
      const newC = curC + directions[i][1];

      if (
        newR >= 0 &&
        newR < maxRow &&
        newC >= 0 &&
        newC < maxCol &&
        farm[newC][newR] == 1
      ) {
        farm[newC][newR] = 2;
        queue.push([newR, newC]);
      }
    }
  }
};

// set farm
for (let i = 0; i < T; i++) {
  const [row, col, K] = input.shift().split(" ").map(Number);
  let farm = Array.from(Array(col), () => Array(row).fill(0));
  let points = 0; // 배추포인트 개수

  for (let j = 0; j < K; j++) {
    const [rowK, colK] = input.shift().split(" ").map(Number);
    farm[colK][rowK] = 1;
  }

  // 밭 순회
  for (let c = 0; c < col; c++) {
    for (let r = 0; r < row; r++) {
      if (farm[c][r] == 1) {
        bfs(r, c, farm, row, col);
        points++;
      }
    }
  }

  wormPoints.push(points);
}

console.log(wormPoints.join("\n").trim());