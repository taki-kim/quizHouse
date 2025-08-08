const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const numbers = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("")
  .map(Number);

let countArr = Array(10).fill(0);

for (let i = 0; i < numbers.length; i++) {
  countArr[numbers[i]]++;
}

let sixAndNine =
  Math.floor((countArr[6] + countArr[9]) / 2) +
  ((countArr[6] + countArr[9]) % 2);
countArr[6] = 0;
countArr[9] = 0;

const Max = Math.max(...countArr);

if (Max >= sixAndNine) console.log(Max);
else console.log(sixAndNine);