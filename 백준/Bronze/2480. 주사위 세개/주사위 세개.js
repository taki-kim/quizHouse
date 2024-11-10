const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let myMap = new Map();

for (let i = 0; i < 3; i++) {
  if (myMap.has(input[i])) myMap.set(input[i], myMap.get(input[i]) + 1);
  if (!myMap.has(input[i])) myMap.set(input[i], 1);
}

myMap = [...myMap].sort((a, b) => b[1] - a[1]);

if (myMap.length === 3) {
  console.log(myMap[0][0] * 100);
} else if (myMap.length === 2) {
  console.log(1000 + myMap[0][0] * 100);
} else if (myMap.length === 1) {
  console.log(10000 + myMap[0][0] * 1000);
}
