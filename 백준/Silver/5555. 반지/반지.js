const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const str = input.shift();
const N = +input.shift();
let count = 0;

for (let i = 0; i < input.length; i++) {
  let addStr = input[i].slice(0, str.length);
  let newStr = input[i] + addStr;

  for (let j = 0; j < newStr.length; j++) {
    if (newStr.slice(j, j + str.length) === str) {
      count++;
      break;
    }
  }
}

console.log(count);