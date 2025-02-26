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

const visited = Array(N).fill(0);

const str = [];
const result = [];

const backTracking = (preIndex) => {
  if (str.length === M) {
    result.push(str.join(" ").trim());
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      str.push(arr[i]);
      visited[i] = 1;
      backTracking(i);
      str.pop();
      visited[i] = 0;
    }
  }
};

for (let i = 0; i < N; i++) {
  str.push(arr[i]);
  visited[i] = 1;
  backTracking(i);
  str.pop();
  visited[i] = 0;
}

console.log(result.join("\n").trim());