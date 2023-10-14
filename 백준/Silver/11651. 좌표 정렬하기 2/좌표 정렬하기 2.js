const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = [];
let result = "";

for (i = 1; i <= n; i++) {
  let xy = input[i].split(" ").map((e) => Number(e));
  arr.push(xy);
}

arr.sort((a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

arr.forEach((e) => (result += e.join(" ") + "\n"));

console.log(result);