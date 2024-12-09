const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

let answer = [];

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const filteredArr = input.filter((e) => e !== input[i] && e !== input[j]);
    if (
      filteredArr.reduce((acc, cur) => {
        return acc + cur;
      }) === 100
    ) {
      answer = filteredArr;
      break;
    }
  }
}

console.log(answer.join("\n").trim());
