const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const condition = input[0].split(" ").map((e) => Number(e));
const arr = input[1].split(" ").map((e) => Number(e));
const M = condition[1];
const newArr = [];

for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i+1; j < arr.length - 1; j++) {
    for (let k = j+1; k < arr.length; k++) {
      let result = arr[i] + arr[j] + arr[k];
      if (result <= M) {
        newArr.push(result);
      }
    }
  }
}

console.log(Math.max(...newArr));