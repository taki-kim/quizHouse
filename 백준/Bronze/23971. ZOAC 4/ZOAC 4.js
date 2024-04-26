const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [H, W, N, M] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let count = 0;

for (let i = 0; i < H; i += N + 1) {
  for (let j = 0; j < W; j += M + 1) {
    count++;
  }
}

console.log(count);
