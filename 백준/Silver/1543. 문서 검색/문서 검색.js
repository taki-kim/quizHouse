const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const docs = input.shift();
const visited = Array(docs.length).fill(0);
const word = input.shift();
let answer = 0;

for (let i = 0; i < docs.length; i++) {
  let count = 0;
  for (let j = 0; j < word.length; j++) {
    if (docs[i + j] === word[j] && !visited[i + j]) {
      count++;
    }
  }
  if (count === word.length) {
    answer++;
    for (let j = 0; j < word.length; j++) {
      visited[i + j] = 1;
    }
  }
}

console.log(answer);