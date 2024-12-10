const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const X = +input[2];

let answer = 0;

for (let i = 0; i < N; i++) {
  let start = arr[i];
  let end = arr[arr.length - 1];

  while (start < end) {
    if (start + end === X) {
      answer++;
      arr.pop();
      break;
    } else if (start + end > X) {
      end = arr[arr.length - 2];
      arr.pop();
    } else if (start + end < X) {
      break;
    }
  }
}

console.log(answer);
