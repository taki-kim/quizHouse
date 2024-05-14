const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

// condition03
input.sort();

// condition02
let myMap = new Map();

input.forEach((e) => {
  item = e.split("");
  let acc = 0;
  item.forEach((e2) => {
    if (Number(e2)) {
      acc += Number(e2);
    }
  });

  myMap.set(e, acc);
});

let result = [];

[...myMap].sort((a, b) => a[1] - b[1]).forEach((e) => result.push(e[0]));

// condition01 & print answer
console.log(
  result
    .sort((a, b) => a.length - b.length)
    .join("\n")
    .trim()
);