const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const cards = input.shift().split(" ").map(Number);
const arrM = input[1].split(" ").map(Number);
let result = [];

let myMap = new Map();
cards.forEach((e) => {
  if (!myMap.has(e)) {
    myMap.set(e, 1);
  } else if (myMap.has(e)) {
    myMap.set(e, myMap.get(e) + 1);
  }
});

arrM.forEach((e) => {
  if (myMap.has(e)) {
    result.push(myMap.get(e));
  } else {
    result.push(0);
  }
});

console.log(result.join(" "));
