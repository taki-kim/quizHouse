const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  let item = input[i].split(" ");
  item[0] = Number(item[0]);
  arr.push(item);
}

arr.sort((a, b) => {
  if (a[0] != b[0]) {
    return a[0] - b[0];
  } else {
    return 0;
  }
});

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i].join(" ") + "\n";
}

console.log(answer);