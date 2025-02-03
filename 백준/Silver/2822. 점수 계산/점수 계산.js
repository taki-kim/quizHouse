const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((e, i) => {
    return [Number(e), i + 1];
  });

const result = [];

input.sort((a, b) => b[0] - a[0]);

result.push(input.slice(0, 5).reduce((acc, e) => (acc += e[0]), 0));
result.push(
  input
    .slice(0, 5)
    .sort((a, b) => a[1] - b[1])
    .map((e) => {
      return e[1];
    })
    .join(" ")
);

console.log(result.join("\n").trim());