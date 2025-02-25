const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const K = +input.shift();
let visited = Array(N).fill(0);

const mySet = new Set();
let str = [];

const backTracking = () => {
  if (str.length === K) {
    mySet.add(str.join("").trim());
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      str.push(input[i]);
      backTracking();
      str.pop();
      visited[i] = 0;
    }
  }
};

for (let i = 0; i < N; i++) {
  visited[i] = 1;
  str.push(input[i]);
  backTracking();
  visited[i] = 0;
  str.pop();
}

console.log(mySet.size);