const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let square = Array.from(new Array(100), () => new Array(100).fill(0));

let n = Number(input[0]);
let answer = 0;

for (let i = 1; i <= n; i++) {
  let xy = input[i].split(" ").map((x) => Number(x));
  let x = xy[0];
  let y = xy[1];
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      if (square[i][j] === 0) {
        square[i][j] = 1;
        answer++;
      }
    }
  }
}

console.log(answer);