const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let myMap = require("fs").readFileSync(filePath).toString().trim().split("\n");
const ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const N = Number(myMap.shift());
let rains = [...new Set(myMap.join(" ").split(" "))].map(Number);

myMap = myMap.map((e) => e.split(" ").map(Number));
let answer = [1]; // 비가 아예 안올 경우 추가

const bfs = (col, row, rain, visited) => {
  const queue = [[col, row]];
  while (queue.length) {
    const [curC, curR] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newC = curC + ds[i][0];
      const newR = curR + ds[i][1];

      if (
        newC >= 0 &&
        newC < N &&
        newR >= 0 &&
        newR < N &&
        myMap[newC][newR] > rain &&
        !visited[newC][newR]
      ) {
        queue.push([newC, newR]);
        visited[newC][newR] = 1;
      }
    }
  }
};

for (let rainIndex = 0; rainIndex < rains.length; rainIndex++) {
  const visited = Array.from(Array(N), () => Array(N).fill(0));
  let count = 0;
  for (let c = 0; c < N; c++) {
    for (let r = 0; r < N; r++) {
      if (myMap[c][r] > rains[rainIndex] && !visited[c][r]) {
        bfs(c, r, rains[rainIndex], visited);
        count++;
      }
    }
  }
  answer.push(count);
}

console.log(Math.max(...answer));