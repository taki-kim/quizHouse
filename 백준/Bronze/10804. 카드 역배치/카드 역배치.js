const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < 10; i++) {
  let [X, Y] = input[i].split(" ").map(Number);

  let fragment01 = nums.slice(0, X - 1);
  let fragment02 = nums.slice(X - 1, Y).reverse();
  let fragment03 = nums.slice(Y);

  nums = [...fragment01, ...fragment02, ...fragment03];
}

console.log(nums.join(" ").trim());