const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = [];
let result = "";

for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

arr.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

arr.sort((a, b) => {
  if (a.length != b.length) {
    return a.length - b.length;
  }
});

arr = new Set(arr);

arr.forEach((e) => (result += e + "\n"));

console.log(result);