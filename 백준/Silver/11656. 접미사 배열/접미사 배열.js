const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString().split("");

const results = [];

for (let i = 0; i < input.length; i++) {
  let newStr = input.slice(i).join("").trim();
  results.push(newStr);
}

console.log(results.sort().join("\n").trim());