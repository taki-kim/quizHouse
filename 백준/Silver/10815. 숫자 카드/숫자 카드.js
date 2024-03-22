const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const listN = new Map();
input
  .shift()
  .split(" ")
  .forEach((e) => listN.set(Number(e), true));

const M = Number(input.shift());
let listM = input.shift().split(" ").map(Number);

listM.forEach((e, i) => {
  if (listN.get(e)) {
    listM[i] = 1;
  } else {
    listM[i] = 0;
  }
});

console.log(listM.join(" "));
