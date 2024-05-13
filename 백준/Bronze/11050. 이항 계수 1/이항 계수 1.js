const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [N, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const factorial = (num) => {
  if (num === 0) return 1;
  else if (num >= 1) {
    let acc = 1;
    for (let i = num; i > 0; i--) {
      acc *= i;
    }
    return acc;
  } else return undefined;
};

const result = factorial(N) / (factorial(N - K) * factorial(K));

console.log(result);