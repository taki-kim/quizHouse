const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\n", " ")
  .split(" ")
  .filter((e) => e !== "");

const reverseStr = (str) => {
  let result = Number(str.split("").reverse().join("").trim());
  return result;
};

const arr = [];
const result = [];

for (let i = 1; i < input.length; i++) {
  result.push(reverseStr(input[i]));
}

console.log(
  result
    .sort((a, b) => a - b)
    .join("\n")
    .trim()
);