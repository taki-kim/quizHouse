const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

let visited = Array(n + 1).fill(0);
let arr = Array(m + 1).fill(0);
let result = [];

function dfs(start, curLev) {
  visited[start] = 1;
  arr[curLev] = start;

  if (curLev === m) {
    result.push(arr.slice(1));
  } else {
    for (let i = 1; i <= n; i++) {
      if (visited[i]) continue;
      if (visited[i] === 0) {
        dfs(i, curLev + 1);
      }
    }
  }

  visited[start] = 0;
}

for (let i = 1; i <= n; i++) {
  dfs(i, 1);
}

let ans = result.map((e) => e.sort((a, b) => a - b).join(" "));

console.log([...new Set(ans)].join("\n").trim());