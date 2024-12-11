const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

const answer = [];

for (let i = 0; i < T * 2; i += 2) {
  const days = input[i];
  const prices = input[i + 1].split(" ").map(Number);

  let maxPriceFromRight = 0;
  let profit = 0;

  for (let d = days - 1; d >= 0; d--) {
    if (prices[d] > maxPriceFromRight) {
      maxPriceFromRight = prices[d];
    } else {
      profit += maxPriceFromRight - prices[d];
    }
  }

  answer.push(profit);
}

console.log(answer.join("\n").trim());
