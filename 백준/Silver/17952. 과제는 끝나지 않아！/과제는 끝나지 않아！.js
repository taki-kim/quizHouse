const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

let answer = 0;

let works = [];

for (let i = 0; i < N; i++) {
  let [work, A, T] = input[i].split(" ").map(Number);
  const lastIndex = works.length - 1;

  if (work === 1) {
    T -= 1;
    if (T) works.push([T, A]);
    if (!T) answer += A;
  }

  if (work === 0) {
    if (works.length && works[lastIndex][0] !== 0) {
      works[lastIndex][0] -= 1;
    }

    if (works.length && works[lastIndex][0] === 0) {
      answer += works[lastIndex][1];
      works.pop();
    }
  }
}

console.log(answer);