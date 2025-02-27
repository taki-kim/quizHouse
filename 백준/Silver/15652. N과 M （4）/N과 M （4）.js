const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const [N, M] = input;

const str = [];
let result = [];

const backTracking = (start) => {
  if (str.length === M) {
    result.push(str.join(" ").trim());
    return;
  }

  for (let i = start; i <= N; i++) {
    str.push(i);
    backTracking(i);
    str.pop();
  }
};

backTracking(1);

console.log(result.join("\n").trim());
