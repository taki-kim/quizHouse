const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let words = [];

input.sort();

const newArr = input
  .filter((e) => {
    if (e.length >= M) return e;
  })
  .sort()
  .sort((a, b) => b.length - a.length);

const myMap = new Map();

newArr.forEach((e) => {
  if (!myMap.has(e)) myMap.set(e, 1);
  else myMap.set(e, myMap.get(e) + 1);
});

[...myMap]
  .sort((a, b) => b[1] - a[1])
  .forEach((e) => {
    words.push(e[0]);
  });

console.log(words.join("\n").trim());