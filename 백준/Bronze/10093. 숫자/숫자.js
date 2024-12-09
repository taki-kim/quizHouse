const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const arr = [];

for (let i = A + 1; i < B; i++) {
  arr.push(i);
}

if (A === B) {
  console.log(0);
} else {
  console.log(B - A - 1);
  console.log(arr.join(" ").trim());
}
