const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

let result = new Array(N).fill(0);

const line = input[0].split(" ").map(Number);

line.forEach((e, lineIndex) => {
  const taller = Number(e);
  let count = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === 0 && count === taller) {
      result[i] = lineIndex + 1;
      break;
    } else if (result[i] === 0 && count < taller) {
      count++;
    } else if (result[i] !== 0 && count < taller) {
      continue;
    }
  }
});

console.log(result.join(" ").trim());