const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const target = input.shift();
const N = +input.shift();
let count = 0;

for (let i = 0; i < input.length; i++) {
  const ring = input[i];
  const extendedRing = ring + ring;

  if (extendedRing.includes(target)) count++;
}

console.log(count);
