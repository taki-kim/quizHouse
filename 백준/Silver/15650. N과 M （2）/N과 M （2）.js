const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [N, M] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array(N)
  .fill()
  .map((e, i) => (e = i + 1));

let str = [];
const result = [];

const backTracking = (preIndex) => {
  if (str.length === M) {
    result.push(str.join(" ").trim());
    return;
  }

  for (let i = preIndex + 1; i < N; i++) {
    str.push(arr[i]);
    backTracking(i);
    str.pop();
  }
};

for (let i = 0; i < N; i++) {
  str.push(arr[i]);
  backTracking(i);
  str.pop();
}

console.log(result.join("\n"));