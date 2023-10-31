const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

let visited = Array(n + 1).fill(0);
let answer = Array(m + 1).fill(0);

function dfs(start, curLev) {
  visited[start] = 1;
  answer[curLev] = start;

  if (curLev == m) {
    console.log(
      answer
        .slice(1, m + 1)
        .join(" ")
        .trim()
    );
  }

  for (let x = 1; x <= n; x++) {
    if (visited[x] == 1) continue;
    if (visited[x] == 0) {
      dfs(x, curLev + 1);
    }
  }
  visited[start] = 0;
}

for (let i = 1; i <= n; i++) {
  dfs(i, 1);
}