const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.pop();

let answer = [];

for (let i = 0; i < input.length; i++) {
  let str = input[i].split("").reverse().join("").trim();
  if (str === input[i]) answer.push("yes");
  else answer.push("no");
}

console.log(answer.join("\n").trim());