const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let length = input.length - 1;
let result = [];

for (let i = 0; i < length; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  result.push(A + B);
}

console.log(result.join("\n").trim());

