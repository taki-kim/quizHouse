const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = +input.shift();
let answer = 0;
let people = new Map();

for (let i = 0; i < N; i++) {
  if (input[i] === "ENTER") {
    answer += people.size;
    people.clear();
  } else {
    people.set(input[i], 0);
  }
}

answer += people.size;

console.log(answer);