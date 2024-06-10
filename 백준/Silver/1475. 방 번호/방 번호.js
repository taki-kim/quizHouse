const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const N = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => a - b);

let count = 1;

let arr = Array(10).fill(0);

N.forEach((e, i) => {
  if (e === 6 || e === 9) {
    arr[9] += 1;
  } else {
    arr[e] += 1;
  }
});

if (arr[9] % 2 == 0) {
  arr[9] = arr[9] / 2;
} else {
  arr[9] = parseInt(arr[9] / 2) + 1;
}

console.log(Math.max(...arr));