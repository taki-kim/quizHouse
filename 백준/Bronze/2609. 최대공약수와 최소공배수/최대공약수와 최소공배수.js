const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const numbers = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let r01 = 0;
let r02 = 0;
let count = 1;

numbers.sort((a, b) => a - b);
const [A, B] = numbers;

for (let i = 1; i <= A; i++) {
  if (A % i == 0 && B % i == 0) {
    r01 = i;
  }
}

while (!r02) {
  let num = r01 * count;
  if (num % A == 0 && num % B == 0) r02 = num;
  count++;
}

console.log(r01);
console.log(r02);