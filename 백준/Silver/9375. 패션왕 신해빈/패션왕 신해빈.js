const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

const res = [];

for (let t = 0; t < T; t++) {
  const num = Number(input.shift());
  let myMap = new Map();

  for (let i = 0; i < num; i++) {
    const [item, type] = input.shift().split(" ");
    if (!myMap.get(type)) {
      myMap.set(type, 1);
    } else {
      myMap.set(type, myMap.get(type) + 1);
    }
  }

  let com =
    [...myMap.values()].reduce((acc, cur) => {
      return acc * (cur + 1);
    }, 1) - 1;

  res.push(com);
}

console.log(res.join("\n").trim());