const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let str = [];
const result = [];

const backTracking = (prevIndex) => {
  if (str.length === M) {
    result.push(str.join(" ").trim());
    return;
  }

  for (let i = 0; i < N; i++) {
    if (i < prevIndex) continue;

    str.push(arr[i]);
    backTracking(i);
    str.pop();
  }
};

backTracking(0);

console.log(result.join("\n").trim());