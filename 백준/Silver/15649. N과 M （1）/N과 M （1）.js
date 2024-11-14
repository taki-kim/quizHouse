const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const [N, M] = input;

const results = [];
const arr = [];

const DFS = () => {
  if (arr.length === M) {
    results.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (arr.includes(i)) continue;
    arr.push(i);
    DFS(i);
    arr.pop();
  }
};

DFS(0);

console.log(results.join("\n").trim());
