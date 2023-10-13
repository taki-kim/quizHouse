const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [payment, quantity] = input;
let sum = 0;

for (let i = 2; i < Number(quantity) + 2; i++) {
  const arr = input[i].split(" ").map((e) => Number(e));
  sum += arr[0] * arr[1];
}

if (Number(payment) === sum) {
  console.log("Yes");
} else {
  console.log("No");
}