const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [num] = input;
const arr = [];

for (let i = 1; i <= Number(num); i++) {
  arr.push(Number(input[i]));
}
const newArr = [...new Set(arr)].sort((a, b) => {
  return a - b;
});

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}