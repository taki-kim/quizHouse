const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, X] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let max = 0;
let temp = 0;
let count = 0;

for (let i = 0; i < X; i++) {
  max += arr[i];
  count = 1;
}

temp = max;

for (let i = X; i < arr.length; i++) {
  temp = temp + arr[i] - arr[i - X];
  if (temp > max) {
    max = temp;
    count = 1;
  } else if (temp == max) {
    count++;
  }
}

if (max) {
  console.log(max + "\n" + count);
} else {
  console.log("SAD");
}