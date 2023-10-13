const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const people = input[0].split(" ").map((e) => Number(e));
const M = people[1];

const scoreList = input[1]
  .split(" ")
  .map((e) => Number(e))
  .sort((a, b) => b - a);

console.log(scoreList[M - 1]);