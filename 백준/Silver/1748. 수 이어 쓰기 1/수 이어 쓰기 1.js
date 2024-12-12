const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let curNum = +input;
let decimal = 10 ** (input.length - 1);

let result = 0;

for (let i = decimal; i >= 1; i /= 10) {
  let curDecimalLength = i.toString().length;

  let curDecimalAmount = curNum - i + 1;

  curNum = i - 1;

  result += curDecimalAmount * curDecimalLength;
}

console.log(result);