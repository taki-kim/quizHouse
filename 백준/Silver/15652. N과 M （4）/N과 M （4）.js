const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

const [N, M] = input.split(" ").map(Number);

let arr = [];
const result = [];

const DFS = (preNum) => {
  if (arr.length === M) {
    result.push(arr.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (i < preNum) continue;
    arr.push(i);
    DFS(i);
    arr.pop();
  }
};

DFS(0);

console.log(result.join("\n"));