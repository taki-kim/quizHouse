const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const test = Number(input.shift());
const result = [];

const ds = [
  [-1, 2],
  [-1, -2],
  [1, 2],
  [1, -2],
  [-2, 1],
  [-2, -1],
  [2, 1],
  [2, -1],
];

const bfs = (row, col, size, targetR, targetC) => {
  const board = Array.from(Array(size), () => Array(size).fill(0));
  const queue = [[col, row]];
  board[col][row] = 1;

  while (queue.length) {
    const [curC, curR] = queue.shift();
    for (let i = 0; i < 8; i++) {
      const newC = curC + ds[i][0];
      const newR = curR + ds[i][1];
      if (
        newC >= 0 &&
        newC < size &&
        newR >= 0 &&
        newR < size &&
        board[newC][newR] == 0
      ) {
        board[newC][newR] = board[curC][curR] + 1;
        queue.push([newC, newR]);
      }
    }
  }

  result.push(
    board[targetC][targetR]
      ? board[targetC][targetR] - 1
      : board[targetC][targetR]
  );
};

for (let t = 0; t < test; t++) {
  const size = Number(input.shift());
  const [posX, posY] = input.shift().split(" ").map(Number);
  const [targetX, targetY] = input.shift().split(" ").map(Number);
  bfs(posX, posY, size, targetX, targetY);
}

console.log(result.join("\n").trim());