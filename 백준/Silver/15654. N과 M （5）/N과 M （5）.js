const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const visited = Array(N).fill(0);

const result = [];
let combination = [];

const backTracking = (start) => {
  if (combination.length === M) {
    result.push(combination.join(" ").trim());
    return;
  }

  for (let i = 0; i < N; i++) {
    if (arr[i] && !visited[i]) {
      combination.push(arr[i]);
      visited[i] = 1;
      backTracking(i + 1);
      combination.pop();
      visited[i] = 0;
    }
  }
};

backTracking(0);

console.log(result.join("\n").trim());
