const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let Max = 0;
let Num = 0;

for (let i = 0; i < input.length; i++) {
  if (Max < input[i]) {
    Max = input[i];
    Num = i + 1;
  }
}

console.log(Max);
console.log(Num);
