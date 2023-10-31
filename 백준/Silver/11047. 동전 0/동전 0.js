const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, k] = input[0].split(" ").map(Number);
let result = 0;
let arr = [];

for (let i = n; i >= 1; i--) {
  arr.push(Number(input[i]));
}

while (k > 0) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) continue;
    if (arr[i] <= k) {
      k = k - arr[i];
      break;
    }
  }
  result++;
}

console.log(result);
