const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const mySet = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    mySet.add(input.substring(i, j));
  }
}

console.log([...mySet].length);
