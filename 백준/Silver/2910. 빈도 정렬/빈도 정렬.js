const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, C] = input.shift().split(" ").map(Number);

const arr = input[0].split(" ").map(Number);

let myMap = new Map();

for (let i = 0; i < N; i++) {
  if (myMap.has(arr[i])) myMap.set(arr[i], myMap.get(arr[i]) + 1);
  if (!myMap.has(arr[i])) myMap.set(arr[i], 1);
}

myMap = [...myMap].sort((a, b) => b[1] - a[1]);

let result = "";

for (let i = 0; i < myMap.length; i++) {
  for (let j = 0; j < myMap[i][1]; j++) {
    result += ` ${myMap[i][0]}`;
  }
}
console.log(result.trim());
