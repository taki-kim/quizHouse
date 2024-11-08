const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const cals = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "+" || input[i] === "-") cals.push(input[i]);
}

for (let i = 0; i < cals.length; i++) {
  if (cals[i - 1] === "-") cals[i] = "-";
}

input = input.split(/[+-]/).map(Number);

let result = input.shift();

for (let i = 0; i < input.length; i++) {
  if (cals[i] === "+") result += input[i];
  if (cals[i] === "-") result -= input[i];
}

console.log(result);
