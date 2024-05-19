const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const len = Number(input.shift());

const map = input.map((e) => e.split("").map(Number));
const visited = Array.from(Array(len), () => Array(len).fill(0));
const ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let villCount = 0;
const houseCounts = [];
const bfs = (c, r) => {
  const queue = [[c, r]];
  visited[c][r] = 1;
  let count = 1;
  while (queue.length) {
    const [curC, curR] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newC = curC + ds[i][0];
      const newR = curR + ds[i][1];

      if (
        newC >= 0 &&
        newC < len &&
        newR >= 0 &&
        newR < len &&
        !visited[newC][newR] &&
        map[newC][newR] == 1
      ) {
        count++;
        visited[newC][newR] = 1;
        queue.push([newC, newR]);
      }
    }
  }
  houseCounts.push(count);
};

for (let c = 0; c < len; c++) {
  for (let r = 0; r < len; r++) {
    if (map[c][r] === 1 && visited[c][r] === 0) {
      bfs(c, r);
      villCount++;
    }
  }
}

console.log(
  villCount +
    "\n" +
    houseCounts
      .sort((a, b) => a - b)
      .join("\n")
      .trim()
);
