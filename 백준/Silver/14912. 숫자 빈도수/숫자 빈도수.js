const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = 0;

for (let i = 1; i <= N; i++) {
  const number = i.toString().split("");
  number.forEach((e) => {
    if (e == M) result++;
  });
}

console.log(result);
