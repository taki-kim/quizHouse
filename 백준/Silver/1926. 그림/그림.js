const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const map = [];
const answer = [];

const ds = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = (n, m, maxN, maxM, map) => {
  const queue = [[n, m]];
  map[n][m] = 2;
  let count = 1;

  while (queue.length) {
    const [curN, curM] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newN = curN + ds[i][0];
      const newM = curM + ds[i][1];
      if (
        newN >= 0 &&
        newN < maxN &&
        newM >= 0 &&
        newM < maxM &&
        map[newN][newM] == 1
      ) {
        queue.push([newN, newM]);
        map[newN][newM] = 2;
        count++;
      }
    }
  }

  answer.push(count);
};

const [N, M] = input.shift().split(" ").map(Number);

// set map
for (let i = 0; i < input.length; i++) {
  map.push(input[i].split(" ").map(Number));
}

for (let n = 0; n < N; n++) {
  for (let m = 0; m < M; m++) {
    if (map[n][m] === 1) {
      bfs(n, m, N, M, map);
    }
  }
}

console.log(answer.length);
console.log(answer.length ? answer.sort((a, b) => b - a)[0] : 0);