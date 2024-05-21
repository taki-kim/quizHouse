const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let visited = Array(N).fill(0);
const node = [];
let results = [];

const nums = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const sol = (start, depth) => {
  visited[start] = 1;
  node.push(nums[start]);

  if (depth === M) {
    results.push(
      [...node] // 복사값을 사용안하면 원본배열 변경되서 다음 재귀에서 꼬임
        .sort((a, b) => a - b)
        .join(" ")
        .trim()
    );
    visited[start] = 0;
    node.pop();
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === 0) {
      sol(i, depth + 1);
    }
  }
  visited[start] = 0;
  node.pop();
};

for (let i = 0; i < nums.length; i++) {
  sol(i, 1);
}

const answer = new Set(results);
console.log([...answer].join("\n").trim());