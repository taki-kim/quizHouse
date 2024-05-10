const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const maze = input.map((e) => e.split("").map(Number));
let visited = Array.from(Array(N), () => Array(M).fill(0));
const results = [];
const directions = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
]; // 상하좌우

const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = 1;

  while (queue.length) {
    const [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newX = curX + directions[i][0];
      const newY = curY + directions[i][1];
      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < M &&
        !visited[newX][newY] &&
        maze[newX][newY] == 1
      ) {
        queue.push([newX, newY]);
        visited[newX][newY] = visited[curX][curY] + 1;
        if (newX == N - 1 && newY == M - 1) {
          break;
        }
      }
    }
  }
};

bfs(0, 0);

console.log(visited[N - 1][M - 1]);