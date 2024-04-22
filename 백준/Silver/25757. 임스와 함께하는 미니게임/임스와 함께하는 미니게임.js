const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [N, game] = input.shift().split(" ");
N = Number(N);

let mySet = new Set([...input]);
mySet = [...mySet];

if (game === "Y") {
  console.log(parseInt(mySet.length / 1));
} else if (game === "F") {
  console.log(parseInt(mySet.length / 2));
} else if (game === "O") {
  console.log(parseInt(mySet.length / 3));
}