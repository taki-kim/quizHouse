const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const odds = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 !== 0) odds.push(input[i]);
}

if (odds.length) {
  console.log(
    odds.reduce((acc, cur) => {
      return acc + cur;
    })
  );
  console.log(odds[0]);
} else {
  console.log(-1);
}