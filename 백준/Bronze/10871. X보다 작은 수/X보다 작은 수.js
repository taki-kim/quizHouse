const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, X] = input.shift().split(" ").map(Number);
input = input[0].split(" ").map(Number);

const result = [];

for (let i = 0; i < N; i++) {
  if (input[i] < X) result.push(input[i]);
}

console.log(result.join(" ").trim());
