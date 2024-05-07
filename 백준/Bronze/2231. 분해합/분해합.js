const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString();
const N = Number(input);
let results = [];

for (let i = N; i > 0; i--) {
  let result = i;
  let x = i
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  result += x;

  if (result === N) results.push(i);
}

if (results.length) {
  console.log(results[results.length - 1]);
} else {
  console.log(0);
}
