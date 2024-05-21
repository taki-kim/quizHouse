const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().trim();
const answer = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    answer.add(input.substring(i, j));
  }
}

console.log(answer.size);