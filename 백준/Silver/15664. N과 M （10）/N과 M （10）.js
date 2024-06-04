const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let node = [];
const answer = new Set();

const dfs = (s, depth) => {
  node.push(arr[s]);
  if (depth === M) {
    answer.add([...node].join(" ").trim());
    node.pop();
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (s < i) {
      dfs(i, depth + 1);
    }
  }
  node.pop();
};

for (let i = 0; i < arr.length; i++) {
  dfs(i, 1);
}

console.log([...answer].join("\n").trim());