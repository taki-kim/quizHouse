const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = +input.shift();
const result = [];

for (let i = 0; i < N; i++) {
  const [A, B] = input[i].split(",").map(Number);
  result.push(A + B);
}

console.log(result.join("\n").trim());
