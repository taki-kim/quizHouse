const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = input.shift();

const mySet = new Set();

for (let i = 0; i < N; i++) {
  let person = input[i].split(" ");
  if (person[1] === "enter") mySet.add(person[0]);
  if (person[1] === "leave") mySet.delete(person[0]);
}

const answer = [...mySet].sort().reverse().join("\n");

console.log(answer);
