const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const paper = Array.from(Array(100), () => new Array(100).fill(0));

let result = 0;

for (let i = 0; i < 4; i++) {
  const [sX, sY, eX, eY] = input[i].split(" ").map(Number);

  for (let y = sY; y < eY; y++) {
    for (let x = sX; x < eX; x++) {
      if (paper[x][y] === 1) continue;
      if (paper[x][y] === 0) {
        paper[x][y] = 1;
        result++;
      }
    }
  }
}

console.log(result);